class TiltDetector {
  constructor() {
    this.onCorrect = null;
    this.onSkip = null;
    this.isActive = false;
    this.lastTrigger = 0;
    this.debounceMs = 1000;
    this.neutralBeta = null;
    this.threshold = 30;
    this._handler = this._handle.bind(this);
  }

  // Returns 'granted' | 'denied' | 'unavailable'
  async requestPermission() {
    if (!window.DeviceOrientationEvent) return 'unavailable';
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const result = await DeviceOrientationEvent.requestPermission();
        return result; // 'granted' or 'denied'
      } catch {
        return 'denied';
      }
    }
    // Android / non-iOS: no permission needed
    return 'granted';
  }

  start() {
    return new Promise((resolve) => {
      this.isActive = false;
      this.neutralBeta = null;

      // Capture one reading to calibrate neutral position
      const calibrate = (e) => {
        this.neutralBeta = e.beta ?? 0;
        window.removeEventListener('deviceorientation', calibrate);
        this.isActive = true;
        window.addEventListener('deviceorientation', this._handler, true);
        resolve();
      };

      window.addEventListener('deviceorientation', calibrate);

      // Fallback if no event fires within 600ms
      setTimeout(() => {
        if (this.neutralBeta === null) {
          this.neutralBeta = 0;
          window.removeEventListener('deviceorientation', calibrate);
          this.isActive = true;
          window.addEventListener('deviceorientation', this._handler, true);
          resolve();
        }
      }, 600);
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

    const beta = e.beta ?? 0;
    const delta = beta - this.neutralBeta;

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
