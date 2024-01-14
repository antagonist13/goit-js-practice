// За допомогою prompt запропонувати користувачу ввести ім'я і прізвище
// після чого за допомогою alert вивести привітання "Привіт name surname !"
// об'єднавши рядки за допомогою оператора конкатенації (+).

const name = prompt("Введіть своє ім'я")
console.log(name)
const surname = prompt("Введіть своє прізвище")
console.log(surname)


alert (`Привіт ${name} ${surname}`)