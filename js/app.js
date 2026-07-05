// ---- State ----
let currentCategory = null;
let gameCards = [];
let cardIndex = 0;
let correctCount = 0;
let skippedCount = 0;
let gameResults = [];
let timerInterval = null;
let timeLeft = 60;
let feedbackTimer = null;
let wakeLock = null;

// ---- Init ----
document.addEventListener('DOMContentLoaded', buildCategoryGrid);

// ---- Screen nav ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showHome() {
  _stopGame();
  showScreen('screen-home');
}

function showCategories() {
  _stopGame();
  showScreen('screen-categories');
}

// ---- Category grid ----
function buildCategoryGrid() {
  const grid = document.getElementById('category-grid');
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-tile';
    btn.style.background = cat.color;
    btn.style.setProperty('--tile-shadow', cat.colorDark);
    btn.innerHTML = `
      <span class="tile-icon">${cat.icon}</span>
      <span class="tile-name">${cat.name}</span>
      <span class="tile-count">${cat.cards.length} kaarten</span>
    `;
    btn.addEventListener('click', () => selectCategory(cat));
    grid.appendChild(btn);
  });
}

function selectCategory(cat) {
  currentCategory = cat;
  document.getElementById('sel-icon').textContent = cat.icon;
  document.getElementById('sel-name').textContent = cat.name;
  showScreen('screen-instructions');
}

// ---- Start ----
async function startGame() {
  if (!currentCategory) return;

  gameCards = shuffle([...currentCategory.cards]);
  cardIndex = 0;
  correctCount = 0;
  skippedCount = 0;
  gameResults = [];
  timeLeft = 60;

  showScreen('screen-game');
  updateTimer();
  updateScore();
  showCard();
  _keepScreenOn();

  // Gyroscope setup
  const perm = await tiltDetector.requestPermission();
  if (perm === 'granted') {
    tiltDetector.onCorrect = () => _answer(true);
    tiltDetector.onSkip = () => _answer(false);
    await tiltDetector.start();
    document.getElementById('tilt-hint').classList.remove('hidden');
  } else {
    document.getElementById('tilt-hint').classList.add('hidden');
  }

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
  document.getElementById('score-display').textContent = `${correctCount} goed`;
}

// ---- Cards ----
function showCard() {
  if (cardIndex >= gameCards.length) {
    gameCards = shuffle([...currentCategory.cards]);
    cardIndex = 0;
  }
  const word = gameCards[cardIndex];
  document.getElementById('card-word').textContent = word;
  document.getElementById('card').className = 'card';
}

function _answer(correct) {
  const word = gameCards[cardIndex];
  gameResults.push({ word, correct });
  if (correct) correctCount++; else skippedCount++;
  cardIndex++;
  updateScore();
  _showFeedback(correct);
}

function _showFeedback(correct) {
  if (feedbackTimer) clearTimeout(feedbackTimer);

  const fb = document.getElementById('feedback');
  const card = document.getElementById('card');

  fb.className = `feedback show ${correct ? 'fb-correct' : 'fb-skip'}`;
  card.classList.add(correct ? 'card-correct' : 'card-skip');
  document.getElementById('fb-icon').textContent = correct ? '✓' : '→';
  document.getElementById('fb-text').textContent = correct ? 'Goed!' : 'Volgende';

  feedbackTimer = setTimeout(() => {
    fb.className = 'feedback';
    showCard();
  }, 650);
}

// Manual buttons (fallback)
function manualCorrect() { if (timeLeft > 0) _answer(true); }
function manualSkip()    { if (timeLeft > 0) _answer(false); }

// ---- End ----
function _stopGame() {
  clearInterval(timerInterval);
  timerInterval = null;
  tiltDetector.stop();
  wakeLock?.release().catch(() => {});
  wakeLock = null;
}

function endGame() {
  _stopGame();

  document.getElementById('final-correct').textContent = correctCount;
  document.getElementById('final-skipped').textContent = skippedCount + ' overgeslagen';

  // Star rating: 1-3 stars based on correct count
  const stars = correctCount >= 10 ? '⭐⭐⭐' : correctCount >= 5 ? '⭐⭐' : '⭐';
  document.getElementById('result-stars').textContent = stars;

  const list = document.getElementById('results-list');
  list.innerHTML = '';
  gameResults.forEach(r => {
    const div = document.createElement('div');
    div.className = `result-item ${r.correct ? 'ri-correct' : 'ri-skip'}`;
    div.innerHTML = `<span>${r.correct ? '✓' : '→'}</span><span>${r.word}</span>`;
    list.appendChild(div);
  });

  showScreen('screen-results');
}

function playAgain() { startGame(); }

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
