// Lets select elements 

const amountInput =document.querySelector("amount");
const firstOption =document.querySelector("firstCurrencyOption");
const amountOption =document.querySelector("secondCurrencyOption");
const resultInput =document.querySelector("result");


runEventListeners();

function runEventListeners(){
    amountInput.addEventListener("input", exchange)
}

function exchange(){
    alert("It run")
}