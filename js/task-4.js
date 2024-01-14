// Написати функці для конвертації валюти, вона отримує в якості аргументів
// два значення сумму в $ і курс валюти.І рахує скільки це буде в гривні.
// Функція виводить в консоль повідомлення:
// "amount USD дорівнює convertedAmount гривням за обмінним курсом exchangeRate"

function conventer (amount, exchangeRate){
    const convertedAmount = amount * exchangeRate
    console.log(`${amount} USD дорівнює ${convertedAmount} гривням за обмінним курсом ${exchangeRate}`);
}
conventer(10, 40)


function conventer1 (amount, exchangeRate){
    const convertedAmount = amount * exchangeRate
    return (`${amount} USD дорівнює ${convertedAmount} гривням за обмінним курсом ${exchangeRate}`);
}
console.log (conventer1(10, 50))