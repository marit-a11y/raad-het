class TiltDetector {
  constructor() {
    this.onCorrect = null;
    this.onSkip = null;
    this.isActive = false;
    this.lastTrigger = 0;
    this.debounceMs = 900;
    this.neutral = { beta: 0, gamma: 0 };
    this.threshold = 22;
    this._handler = this._handle.bind(this);
  }

  // Must be called directly inside a tap handler (iOS requirement)
  async requestPermission() {
    if (!window.DeviceOrientationEvent) return 'unavailable';
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        return await DeviceOrientationEvent.requestPermission(); // 'granted' | 'denied'
      } catch {
        return 'denied';
      }
    }
    // Android / desktop — no dialog needed
    return 'granted';
  }

  needsPermissionDialog() {
    return typeof DeviceOrientationEvent !== 'undefined' &&
           typeof DeviceOrientationEvent.requestPermission === 'function';
  }

  start() {
    return new Promise((resolve) => {
      this.isActive = false;

      const calibrate = (e) => {
        this.neutral = { beta: e.beta ?? 0, gamma: e.gamma ?? 0 };
        window.removeEventListener('deviceorientation', calibrate);
        this.isActive = true;
        window.addEventListener('deviceorientation', this._handler, true);
        resolve();
      };

      window.addEventListener('deviceorientation', calibrate);
      setTimeout(() => {
        if (!this.isActive) {
          this.neutral = { beta: 0, gamma: 0 };
          window.removeEventListener('deviceorientation', calibrate);
          this.isActive = true;
          window.addEventListener('deviceorientation', this._handler, true);
          resolve();
        }
      }, 800);
    });
  }

  stop() {
    this.isActive = false;
    window.removeEventListener('deviceorientation', this._handler, true);
  }

  _handle(e) {
    if (!this.isActive) return;
    const now = Date.now();
    if (now - this.lastTrigger < this.debounceMs) return;

    const dBeta  = (e.beta  ?? 0) - this.neutral.beta;
    const dGamma = (e.gamma ?? 0) - this.neutral.gamma;

    // In landscape, gamma is de voor-achter-as.
    // In portrait (of als gamma niet beweegt), valt beta terug.
    // Gebruik de as die het meest beweegt.
    const delta = Math.abs(dGamma) >= Math.abs(dBeta) ? dGamma : dBeta;

    if (delta > this.threshold) {
      this.lastTrigger = now;
      this.onCorrect?.();
    } else if (delta < -this.threshold) {
      this.lastTrigger = now;
      this.onSkip?.();
    }
  }
}

const tiltDetector = new TiltDetector();
