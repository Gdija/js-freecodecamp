// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let player = {
    name: "kdj",
    chips: 123
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+ ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame(){
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum =  firstCard + secondCard

    renderGame()
}

function renderGame(){
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    //render out all the cards we have
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard(){
        // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}