window.addEventListener("load", () => {
  //start your code here

//DOM elements
const resultEl = document.getElementById('result');
let passwordLength = document.getElementById('password-length');
const submitBtn = document.getElementById('submit');

let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','I','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~','0','1','2','3','4','5','6','7','8','9'];

//Generate Password Function

function generatePassword() {
  const password = [];
  passwordLength = parseInt(passwordLength.value);
 
  for (let i = 0; i < passwordLength; i ++) {
    const item = characters[Math.floor(Math.random() * characters.length)];
    password.push(item);
    } 
   return password.join('');
  }

//Generate event listener
submitBtn.addEventListener('click', () => {

  if (passwordLength.value >= 4) {
    resultEl.innerText = generatePassword();
  } else {
    alert('minimum of 4 required');
  }
});
  
// generator functions
/*

function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

console.log(getLowerCase())

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
  console.log(getUpperCase());

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)  
}

console.log(getNumber());

function getSymbol() {
  const symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}

console.log(getSymbol());
*/
})
