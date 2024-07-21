import { useEffect } from 'react';

const useShakeDetection = (onShake) => {
  useEffect(() => {
    let lastShake = 0;

    const handleDeviceMotion = (event) => {
      const currentTime = Date.now();
      const acceleration = event.acceleration;
      if (acceleration) {
        const { x, y, z } = acceleration;
        const magnitude = Math.sqrt(x * x + y * y + z * z);
        if (magnitude > 20) { // Adjust the threshold as needed
          if (currentTime - lastShake > 2000) { // Debounce: ignore shakes within 2 seconds
            lastShake = currentTime;
            onShake();
          }
        }
      }
    };

    window.addEventListener('devicemotion', handleDeviceMotion);

    return () => {
      window.removeEventListener('devicemotion', handleDeviceMotion);
    };
  }, [onShake]);
};

export default useShakeDetection;
