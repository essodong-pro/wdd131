// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather values for Togo
const temperature = 30; // °C
const windSpeed = 12;   // km/h

// Wind chill formula (Celsius version)
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Conditions for valid wind chill calculation
let chillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    chillValue = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Display wind chill
document.getElementById("chill").textContent = chillValue;
