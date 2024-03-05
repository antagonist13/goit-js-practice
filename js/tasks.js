// function makeTransaction(quantity, pricePerDroid) {
    
//     return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//===============================================================================

// function getShippingMessage(country, price, deliveryFee) {
    
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//=================================
// function getElementWidth(content, padding, border) {
    
//     return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200


//===============================================================================
// Написати функці для конвертації валюти, вона отримує в якості аргументів
// два значення сумму в $ і курс валюти.І рахує скільки це буде в гривні.
// Функція виводить в консоль повідомлення:
// "amount USD дорівнює convertedAmount гривням за обмінним курсом exchangeRate"

// function conventer (amount, exchangeRate){
//     const convertedAmount = amount * exchangeRate
//     console.log(`${amount} USD дорівнює ${convertedAmount} гривням за обмінним курсом ${exchangeRate}`);
// }
// conventer(10, 40)


// function conventer1 (amount, exchangeRate){
//     const convertedAmount = amount * exchangeRate
//     return (`${amount} USD дорівнює ${convertedAmount} гривням за обмінним курсом ${exchangeRate}`);
// }
// console.log (conventer1(10, 50))
//===============================================================================
// За допомогою prompt запропонувати користувачу ввести ім'я і прізвище
// після чого за допомогою alert вивести привітання "Привіт name surname !"
// об'єднавши рядки за допомогою оператора конкатенації (+).

// const name = prompt("Введіть своє ім'я")
// console.log(name)
// const surname = prompt("Введіть своє прізвище")
// console.log(surname)


// alert (`Привіт ${name} ${surname}`)


//===============================================================================

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
   return this.split(' ').map( item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());


// String.prototype.toJadenCase = function() {
//   return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
// };