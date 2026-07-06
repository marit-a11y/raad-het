// ---- State ----
let gameCards = [];   // { word, icon } objects
let cardIndex = 0;
let correctCount = 0;
let skippedCount = 0;
let gameResults = [];
let timerInterval = null;
let timeLeft = 60;
let feedbackTimer = null;
let wakeLock = null;

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  _lockLandscape();
  // Volumeknoppen als skip (werkt op sommige Android-toestellen in Chrome)
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 24 || e.keyCode === 25 ||
        e.key === 'AudioVolumeDown' || e.key === 'AudioVolumeUp') {
      e.preventDefault();
      manualSkip();
    }
  });
});

async function _lockLandscape() {
  try { await screen.orientation.lock('landscape'); } catch {}
}

// ---- Screen nav ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function showHome() { _stopGame(); showScreen('screen-home'); }

// ---- Build deck: alle kaarten door elkaar ----
function buildDeck() {
  const all = [];
  CATEGORIES.forEach(cat => {
    cat.cards.forEach(word => all.push({ word, icon: cat.icon }));
  });
  return shuffle(all);
}

// ---- Start flow ----
function startGame() {
  showScreen('screen-instructions');
  document.getElementById('btn-permission').style.display = 'none';
  document.getElementById('btn-start').style.display = '';
}

async function grantAndStart() { beginRound(); }

function beginRound() {
  gameCards = buildDeck();
  cardIndex = 0;
  correctCount = 0;
  skippedCount = 0;
  gameResults = [];
  timeLeft = 90;

  showScreen('screen-game');
  updateTimer();
  updateScore();
  showCard();
  _keepScreenOn();

  timerInterval = setInterval(_tick, 1000);
}

function _tick() {
  timeLeft--;
  updateTimer();
  if (timeLeft <= 0) endGame();
}

function updateTimer() {
  const el = document.getElementById('timer');
  el.textContent = timeLeft;
  el.classList.toggle('urgent', timeLeft <= 10);
}

function updateScore() {
  document.getElementById('score-display').textContent = correctCount;
}

// ---- Cards ----
function showCard() {
  if (cardIndex >= gameCards.length) {
    gameCards = buildDeck();
    cardIndex = 0;
  }
  const { word } = gameCards[cardIndex];
  document.getElementById('card-word').textContent = word;
  document.getElementById('card').className = 'card';
}

function _answer(correct) {
  const { word, icon } = gameCards[cardIndex];
  gameResults.push({ word, icon, correct });
  if (correct) correctCount++; else skippedCount++;
  cardIndex++;
  updateScore();
  _showFeedback(correct);
}

function _showFeedback(correct) {
  if (feedbackTimer) clearTimeout(feedbackTimer);
  const fb   = document.getElementById('feedback');
  const card = document.getElementById('card');
  fb.className = `feedback show ${correct ? 'fb-correct' : 'fb-skip'}`;

  // Swap Lucide icon and re-render
  const icon = document.getElementById('fb-icon');
  icon.setAttribute('data-lucide', correct ? 'check' : 'arrow-right');
  lucide.createIcons({ nodes: [icon] });

  card.classList.add(correct ? 'card-correct' : 'card-skip');
  feedbackTimer = setTimeout(() => { fb.className = 'feedback'; showCard(); }, 550);
}

// Manual tap buttons
function manualCorrect() { if (timeLeft > 0) _answer(true); }
function manualSkip()    { if (timeLeft > 0) _answer(false); }

// ---- End ----
function _stopGame() {
  clearInterval(timerInterval); timerInterval = null;
  tiltDetector.stop();
  wakeLock?.release().catch(() => {});
  wakeLock = null;
}

function endGame() {
  _stopGame();
  document.getElementById('final-correct').textContent = correctCount;
  document.getElementById('final-skipped').textContent = skippedCount + ' overgeslagen';
  const starCount = correctCount >= 6 ? 3 : correctCount >= 3 ? 2 : 1;
  const starsEl = document.getElementById('result-stars');
  starsEl.innerHTML = Array.from({length: 3}, (_, i) =>
    `<i data-lucide="star" class="icon-star${i < starCount ? ' star-filled' : ''}"></i>`
  ).join('');
  lucide.createIcons({ nodes: [...starsEl.querySelectorAll('[data-lucide]')] });

  const list = document.getElementById('results-list');
  list.innerHTML = '';
  gameResults.forEach(r => {
    const div = document.createElement('div');
    div.className = `result-item ${r.correct ? 'ri-correct' : 'ri-skip'}`;
    div.innerHTML = `<span>${r.icon}</span><span>${r.word}</span>`;
    list.appendChild(div);
  });

  showScreen('screen-results');
}

// ---- Wake lock ----
async function _keepScreenOn() {
  if ('wakeLock' in navigator) {
    try { wakeLock = await navigator.wakeLock.request('screen'); } catch {}
  }
}

// ---- Util ----
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
