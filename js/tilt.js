class TiltDetector {
  constructor() {
    this.onCorrect = null;
    this.onSkip    = null;
    this.isActive  = false;
    this.lastTrigger = 0;
    this.debounceMs  = 900;
    this.prev = null;          // vorige meting
    this.velocityThreshold = 4; // graden/meting = snelle beweging
    this.angleThreshold    = 20; // absolute hoek vanaf neutraal
    this.neutral = null;
    this._handler = this._handle.bind(this);
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
      this.prev    = null;
      this.neutral = null;

      const calibrate = (e) => {
        this.neutral = { beta: e.beta ?? 0, gamma: e.gamma ?? 0 };
        this.prev    = { beta: e.beta ?? 0, gamma: e.gamma ?? 0 };
        window.removeEventListener('deviceorientation', calibrate);
        window.removeEventListener('deviceorientationabsolute', calibrate);
        this.isActive = true;
        window.addEventListener('deviceorientation', this._handler, true);
        window.addEventListener('deviceorientationabsolute', this._handler, true);
        resolve();
      };

      // Probeer beide event-types (absolute is nauwkeuriger op Android)
      window.addEventListener('deviceorientation', calibrate);
      window.addEventListener('deviceorientationabsolute', calibrate);

      setTimeout(() => {
        if (!this.isActive) {
          this.neutral = { beta: 0, gamma: 0 };
          this.prev    = { beta: 0, gamma: 0 };
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
    if (!this.isActive || !this.prev || !this.neutral) return;

    const now = Date.now();
    if (now - this.lastTrigger < this.debounceMs) return;

    const beta  = e.beta  ?? 0;
    const gamma = e.gamma ?? 0;

    // Snelheid (graden veranderd t.o.v. vorige meting)
    const velBeta  = beta  - this.prev.beta;
    const velGamma = gamma - this.prev.gamma;

    // Absolute positie t.o.v. neutraal
    const dBeta  = beta  - this.neutral.beta;
    const dGamma = gamma - this.neutral.gamma;

    this.prev = { beta, gamma };

    // Trigger als: snelle beweging (velocity) ÉN al ver genoeg van neutraal
    const fastBeta  = Math.abs(velBeta)  > this.velocityThreshold && Math.abs(dBeta)  > this.angleThreshold;
    const fastGamma = Math.abs(velGamma) > this.velocityThreshold && Math.abs(dGamma) > this.angleThreshold;

    if (!fastBeta && !fastGamma) return;

    // Welke as beweegt het meest?
    const delta = Math.abs(dGamma) >= Math.abs(dBeta) ? dGamma : dBeta;

    this.lastTrigger = now;
    if (delta > 0) this.onCorrect?.();
    else           this.onSkip?.();
  }
}

const tiltDetector = new TiltDetector();
