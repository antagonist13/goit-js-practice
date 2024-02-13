//* GREETINGS
// const name = prompt("What`s your name?")
// const welcome = alert(`Hello ${name}`)
// console.log(`Hello ${name}`)

// const likesCats = confirm(`${name}, do you like cats?`)
// if (likesCats) {
//     alert(`You are a cool cat!`)
//     console.log(`(Yes) You are a cool cat!`);
//     } else {
//         alert(`Yeah, that is fine. You are still cool!`)
//         console.log(`(No) Yeah, that is fine. You are still cool!`);
// }

//* GAME 
const words = ["javascript", "monkey", "amazing", "pancake"]
const word = words[Math.floor(Math.random() * words.length)]

let answerArray = []
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}
let remainingLetters = word.length


while (remainingLetters > 0) {

    alert(answerArray.join(" "))
    
    const guess = prompt("Guess a letter, or click Cancel to stop playing.")
    if (guess === null) {
        alert(`Sad that you didn't want to play(`)
        break
    } else if (guess.length !== 1) {
        alert(`Please enter a single letter.`)
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess
                remainingLetters--
            } 
        }
    }
}
if (remainingLetters == 0) {
    alert(`Good job! The answer was ${word}`)
    }

