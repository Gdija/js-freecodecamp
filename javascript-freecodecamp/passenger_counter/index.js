// initialize the count as 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}
// save()

// let message = "You have tree new notifications"
// let messageTouser = message

// console.log(message)

// let name = 42
// let greeting = 'hi, my name is '
// let myGreeting = greeting + name
//  console.log(myGreeting)

let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
console.log(myPoints)

