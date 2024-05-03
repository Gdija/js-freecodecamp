let welcomeEl = document.getElementById("welcome-el")

let name = "kdj"
let greeting = "Welcome to our space "
let message = greeting + name
welcomeEl.innerText = message 
// welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋"