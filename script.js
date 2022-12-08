const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

function randomFunc(){

    const lower= getRandomLower();
    const upper= getRandomUpper();
    const number= getRandomNumber();
    const symbol= getRandomSymbol();


    const randomfunc=[];


    //checks if password should contain uppercase, lowercase, number and symbol
    //if true stores it in array randomfunc

    if(uppercaseEl.checked){
        randomfunc.push(upper);
    }

    if(lowercaseEl.checked){
        randomfunc.push(lower);
    }
    if(numbersEl.checked){
        randomfunc.push(number);
    }
    if(symbolsEl.checked){
        randomfunc.push(symbol);
    }


    //selects random value from array randomfunc
    let val=Math.floor(Math.random()*randomfunc.length); 
    return randomfunc[val];

};

clipboardEl.addEventListener('click', function (coppwd) {
    navigator.clipboard.writeText(resultEl.innerText).then(() => alert('Password copied'));
});


generateEl.addEventListener('click', generatePassword);

function generatePassword() {
    
    let pwd="";

    for(let i=0; i<lengthEl.value ;i++){
        let fun=randomFunc();
        pwd = pwd +fun;
    }

    resultEl.textContent=pwd;
    
};


// return random alphabets in lowercase
function getRandomLower() {

    let low="abcdefghijklmnopqrstuvwxyz";
    let val=Math.floor(Math.random()*26);       //return random number between 0-25
    return low[val];
    
};

// return random  alphabets in uppercase 
function getRandomUpper() {

    let upp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let val=Math.floor(Math.random()*26);      //return random number between 0-25
    return upp[val];

};

// return random  number
function getRandomNumber() {

    let num="0123456789";
    let val=Math.floor(Math.random()*10);       //return random number between 0-9
    return num[val];

};

// return random  symbol
function getRandomSymbol() {

    let sym="~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
    let val=Math.floor(Math.random()*31);       //return random number between 0-30
    return sym[val];

};
