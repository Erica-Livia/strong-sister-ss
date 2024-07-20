(function() {
    const shakeThreshold = 15;
    let lastUpdate = 0;
    let x, y, z, lastX, lastY, lastZ;

    function deviceMotionHandler(event) {
        const acceleration = event.accelerationIncludingGravity;
        const currentTime = new Date().getTime();

        if ((currentTime - lastUpdate) > 100) {
            const diffTime = (currentTime - lastUpdate);
            lastUpdate = currentTime;

            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;

            const speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;

            if (speed > shakeThreshold) {
                alertUser();
            }

            lastX = x;
            lastY = y;
            lastZ = z;
        }
    }

    function alertUser() {
        document.getElementById('status').innerText = "Shake detected! Alerting emergency contact...";
        // Code to alert the emergency contact goes here.
        // This can be done through an API call or sending a message.
    }

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        alert("DeviceMotionEvent is not supported on your device.");
    }
})();