window.addEventListener("load", () => {
  //start your code here

//DOM elements
let passwordLength = document.querySelector('#password-length');
const submitBtn = document.querySelector('#submit');
const passwordDisplay = document.querySelector('#password-display');

//object of generator functions
const randomChar = {
  lower: getLowercase,
  upper: getUppercase,
  number: getNumber,
  symbol: getSymbol
};

//generate event listener
submitBtn.addEventListener('click',() => {

  if(passwordLength.value <= 3) {
    alert('minimum-length of 4 required')
    return '';
  };

    passwordLength = parseInt(passwordLength.value);
    const hasLower = true;
    const hasUpper = true;
    const hasSymbol = true;
    const hasNumber = true;
  
    passwordDisplay.innerText = generatePassword(hasLower, 
      hasUpper, 
      hasSymbol, 
      hasNumber, 
      passwordLength);
  }
)

// generate password function
function generatePassword(lower, upper, number, symbol, passwordLength) {
  //1.init pw var
  //2.loop over length
  //3.call generator function for each type
  //4.add final password to password variable and return
  let passwordResult = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}];
  
  for (let i = 0; i < passwordLength; i += typesCount) {
    typesArr.forEach(type => {
      const charName = Object.keys(type)[0];
     // console.log('charName: ', charName);

      passwordResult += randomChar[charName]();
    })
  }

  passwordDisplay.style.color = 'black';

  return passwordResult;
}

// generator functions

function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
  
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);  
}

function getSymbol() {
  const symbols = '!#$%&()*+,-./:;<=>?@[\\]^_{|}~'
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}

});
