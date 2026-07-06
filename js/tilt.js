class TiltDetector {
  constructor() {
    this.onCorrect = null;
    this.isActive  = false;
    this.lastTrigger = 0;
    this.debounceMs  = 1500;
    this.neutralForward = 0;
    this.smoothed = 0;
    this.threshold = 50;    // graden vanaf rustpositie
    this.neutralZone = 20;  // moet ver genoeg terugkomen
    this.waitingForNeutral = false;
    this._handler = this._handle.bind(this);
    this._calibrated = false;
  }

  // angle=90  (landscape-primary):   neus omlaag → gamma daalt  → -gamma
  // angle=270 (landscape-secondary): neus omlaag → gamma stijgt → +gamma
  _forwardTilt(e) {
    const angle = screen.orientation?.angle ?? 0;
    const gamma = e.gamma ?? 0;
    const beta  = e.beta  ?? 0;
    if (Math.abs(angle - 90)  < 45) return -gamma;
    if (Math.abs(angle - 270) < 45) return  gamma;
    return beta;
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
      this.waitingForNeutral = false;
      this._calibrated = false;
      let samples = [];

      const calibrate = (e) => {
        // Gemiddelde van 5 metingen als rustpositie
        samples.push(this._forwardTilt(e));
        if (samples.length >= 5) {
          this.neutralForward = samples.reduce((a, b) => a + b, 0) / samples.length;
          this.smoothed = this.neutralForward;
          this._calibrated = true;
          window.removeEventListener('deviceorientation', calibrate);
          window.removeEventListener('deviceorientationabsolute', calibrate);
          this.isActive = true;
          window.addEventListener('deviceorientation', this._handler, true);
          window.addEventListener('deviceorientationabsolute', this._handler, true);
          resolve();
        }
      };

      window.addEventListener('deviceorientation', calibrate);
      window.addEventListener('deviceorientationabsolute', calibrate);

      setTimeout(() => {
        if (!this.isActive) {
          this.neutralForward = this.smoothed = 0;
          window.removeEventListener('deviceorientation', calibrate);
          window.removeEventListener('deviceorientationabsolute', calibrate);
          this.isActive = true;
          window.addEventListener('deviceorientation', this._handler, true);
          window.addEventListener('deviceorientationabsolute', this._handler, true);
          resolve();
        }
      }, 1500);
    });
  }

  stop() {
    this.isActive = false;
    window.removeEventListener('deviceorientation', this._handler, true);
    window.removeEventListener('deviceorientationabsolute', this._handler, true);
  }

  _handle(e) {
    if (!this.isActive) return;

    const raw = this._forwardTilt(e);
    // Exponential moving average om ruis te dempen (0.3 = traag, stabiel)
    this.smoothed = this.smoothed * 0.7 + raw * 0.3;

    const delta = this.smoothed - this.neutralForward;

    // Debug
    const dbg = document.getElementById('debug');
    if (dbg) {
      const angle = screen.orientation?.angle ?? '?';
      dbg.textContent = `raw:${raw.toFixed(0)}° smooth:${this.smoothed.toFixed(0)}° Δ${delta.toFixed(0)}°${this.waitingForNeutral ? ' ⏸' : ''}`;
    }

    if (this.waitingForNeutral) {
      if (Math.abs(delta) < this.neutralZone) this.waitingForNeutral = false;
      return;
    }

    const now = Date.now();
    if (now - this.lastTrigger < this.debounceMs) return;

    if (Math.abs(delta) > this.threshold) {
      this.lastTrigger = now;
      this.waitingForNeutral = true;
      this.onCorrect?.();
    }
  }
}

const tiltDetector = new TiltDetector();
