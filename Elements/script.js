        let ua = navigator.userAgent;
        let np = navigator.platform;

        let osName = "Unknown";

        if (ua.includes("Android")) {
            osName = "Android";
        }

        else if (ua.includes("iPhone") || (ua.includes("iPad"))) {
            osName = "iOS";
        }

        else if (np.includes("Win")) {
            osName = "Windows";
        }

        else if (np.includes("Mac")) {
            osName = "macOS";
        }

        else if (np.includes("Linux")) {
            osName = "Linux";
        }

        document.getElementById("os").textContent = osName;

        let browserName = "Unknown";

        if (ua.includes("Edg")) {
            browserName = "Edge";
        }

        else if (ua.includes("Firefox")) {
            browserName = "Firefox";
        }

        else if (ua.includes("Chrome")) {
            browserName = "Chrome";
        }

        else if (ua.includes("Safari")) {
            browserName = "Safari";
        }

        document.getElementById("browser").textContent = browserName;

        document.getElementById("screenResolution").textContent = screen.width + " x " + screen.height;

        fetch("https://api.ipify.org?format=json").then(Response => Response.json()).then(data => {
            document.getElementById("IP").textContent = data.ip;
        });
