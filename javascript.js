console.log("Siema , to Strona Internetowa z Opisem mnie");

const button = document.querySelector(".js-Theme");

button.addEventListener("click", () => {
 document.body.classList.toggle("dark");
});

let tekst ="tekst zmiennej";

if(tekst) {
    console.log("Tekst nie jest pusty");
}

let liczba = 0;

if(liczba) {
    console.log("Liczba nie jest zerem");
}

function double(number) {
    return number * 2;
}

let myNumber = 5;
console.log(double(myNumber));

console.log("HELLO KANTOR NIE BEMA")
let formElement = document.querySelector(".js-F");
let amountElement = document.querySelector(".js-A");
let resultElement = document.querySelector(".js-R");
let currencyElement = document.querySelector(".js-WC");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = (amount / currency);
    resultElement.innerText = result.toFixed(2);
});

