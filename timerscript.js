let counter = 0;
let key = sessionStorage.setItem("counter", counter++)

function incrementCounter() {
    counter++;
    document.getElementById("clock").textContent = counter; // Aggiorna anche l’orologio
}

if (sessionStorage.getItem("counter")) {
    counter = parseInt(sessionStorage.getItem("counter"));
} else {
    counter = 0;
}

setInterval(incrementCounter, 1000);
