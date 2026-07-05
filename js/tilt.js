class TiltDetector {
  constructor() {
    this.onCorrect = null;
    this.onSkip    = null;
    this.isActive  = false;
    this.lastTrigger = 0;
    this.debounceMs  = 850;
    this.neutralForward = 0;
    this.threshold = 18;
    this.prev = 0;
    this.velocityThreshold = 3;
    this._handler = this._handle.bind(this);
  }

  // Leest de "neus-omlaag" as correct, ongeacht landscape-richting.
  // angle=90  (landscape-primary):   neus omlaag → gamma daalt  → gebruik -gamma
  // angle=270 (landscape-secondary): neus omlaag → gamma stijgt → gebruik +gamma
  _forwardTilt(e) {
    const angle = screen.orientation?.angle ?? 0;
    const gamma = e.gamma ?? 0;
    const beta  = e.beta  ?? 0;
    if (Math.abs(angle - 90)  < 45) return -gamma;
    if (Math.abs(angle - 270) < 45) return  gamma;
    return beta; // portret-fallback
  }

  needsPermissionDialog() {
    return typeof DeviceOrientationEvent !== 'undefined' &&
           typeof DeviceOrientationEvent.requestPermission === 'function';
  }

  async requestPermission() {
    if (!window.DeviceOrientationEvent) return 'unavailable';
    if (this.needsPermissionDialog()) {
      try { return await DeviceOrientationEvent.requestPermission(); }
      catch { return 'denied'; }
    }
    return 'granted';
  }

  start() {
    return new Promise((resolve) => {
      this.isActive = false;

      const calibrate = (e) => {
        this.neutralForward = this._forwardTilt(e);
        this.prev = this.neutralForward;
        window.removeEventListener('deviceorientation', calibrate);
        window.removeEventListener('deviceorientationabsolute', calibrate);
        this.isActive = true;
        window.addEventListener('deviceorientation', this._handler, true);
        window.addEventListener('deviceorientationabsolute', this._handler, true);
        resolve();
      };

      window.addEventListener('deviceorientation', calibrate);
      window.addEventListener('deviceorientationabsolute', calibrate);

      setTimeout(() => {
        if (!this.isActive) {
          this.neutralForward = 0; this.prev = 0;
          window.removeEventListener('deviceorientation', calibrate);
          window.removeEventListener('deviceorientationabsolute', calibrate);
          this.isActive = true;
          window.addEventListener('deviceorientation', this._handler, true);
          window.addEventListener('deviceorientationabsolute', this._handler, true);
          resolve();
        }
      }, 800);
    });
  }

  stop() {
    this.isActive = false;
    window.removeEventListener('deviceorientation', this._handler, true);
    window.removeEventListener('deviceorientationabsolute', this._handler, true);
  }

  _handle(e) {
    if (!this.isActive) return;
    const now = Date.now();

    const forward = this._forwardTilt(e);
    const delta   = forward - this.neutralForward;
    const velocity = forward - this.prev;
    this.prev = forward;

    // Debug
    const dbg = document.getElementById('debug');
    if (dbg) {
      const angle = screen.orientation?.angle ?? '?';
      dbg.textContent = `↕ ${forward.toFixed(0)}° (Δ${delta.toFixed(0)} v${velocity.toFixed(1)}) angle:${angle}`;
    }

    if (now - this.lastTrigger < this.debounceMs) return;

    const fastEnough = Math.abs(velocity) > this.velocityThreshold;
    const farEnough  = Math.abs(delta)    > this.threshold;

    if (fastEnough && farEnough) {
      this.lastTrigger = now;
      if (delta > 0) this.onCorrect?.(); // neus omlaag = goed
      else           this.onSkip?.();    // neus omhoog = overslaan
    }
  }
}

const tiltDetector = new TiltDetector();
