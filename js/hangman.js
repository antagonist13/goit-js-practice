//* GREETINGS
const name = prompt("What`s your name?")
if (name !== null && name !== "") {
    alert(`Hello ${name}`)  
    console.log(`Hello ${name}`)

    const likesCats = confirm(`${name}, do you like cats?`)
    if (likesCats) {
    alert(`You are a cool cat!`)
    console.log(`(Yes) You are a cool cat!`);
    } else {
        alert(`Yeah, that is fine. You are still cool!`)
        console.log(`(No) Yeah, that is fine. You are still cool!`);
    } 
} 
    
//* GAME 
const words = ["javascript", "monkey", "amazing", "pancake", "cup", "knife", "sinner", "bottom", "ancient", "word", "tasty", "picture"]
const word = words[Math.floor(Math.random() * words.length)]
const maxAttempts = word.length + 10
let attempts = 0

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
let remainingLetters = word.length
alert(`Let's play the Hangman game. You need to specify the letters that can appear in the specified word. You have only 10 mistakes.The best one wins!`)

while ((remainingLetters > 0 || answerArray.join("").includes("_")) && attempts < maxAttempts) {
    attempts += 1
    console.log(attempts);
    alert(answerArray.join(" "))
    const guess = prompt("Guess a letter, or click Cancel to stop playing.")
    if (guess === null) {
        alert(`Sad that you didn't want to play(`)
        break
    } else if (guess.length !== 1) {
        alert(`Please enter a single letter.`)
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess.toLowerCase()) {
                answerArray[j] = guess.toLowerCase()
                remainingLetters--
            } 
        }
    }
}
if (remainingLetters == 0) {
    alert(`Good job! The answer was ${word}`)
}
    if (attempts >= maxAttempts) {
    alert(`Unfortunately, you've run out of attempts. Try restarting the game and retrying! Press F5 or reload the page.`)
}