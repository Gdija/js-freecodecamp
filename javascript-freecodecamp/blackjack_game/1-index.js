// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);

// let mySelf = ["kdj", 25, true]

// // messages.push(newMessage)
// for(let count = 10; count < 101; count += 10) {
//     console.log(count);
// }
// let cards = [7, 3, 9]
// for(let i = 0; i < cards.length; i +=1){
//     console.log(cards[i])
// }

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for(let i = 0; i < sentence.length; i += 1) {
//     greetingEl.textContent += sentence[i]

// }
// function totalRaceTime(){
//     return player1Time + player2Time
// }
// let totalTime = totalRaceTime()
// console.log(totalTime)

let hasSolvedChallenge = false
let hasHintsLeft = false
 
if (hasSolvedChallenge === false && hasHintsLeft === false){
    showSolution ()
}

function showSolution() {
    console.log("Showing the solution....")
}

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === false) {
    recommendMovie()
}
 function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
 }