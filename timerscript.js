let counter = 0;


if (sessionStorage.getItem("counter")) {

  counter = parseInt(sessionStorage.getItem("counter"))
} else {

  counter = 0;
}


document.getElementById("clock").textContent = counter

function incrementCounter() {
  counter++
  document.getElementById("clock").textContent = counter
  sessionStorage.setItem("counter", counter)
}


setInterval(incrementCounter, 1000)