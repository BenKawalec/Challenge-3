// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

chars = chars.split('')

console.log(Math.random())

console.log(chars)
// Add event listener to generate button
generateBtn.addEventListener("click", randomNumber);

function passwordInfo() {
  charNum  = prompt("how many characters do you want");
  if (charNum != null) {
    questions()
  }
  
  if (charNum < 8) {
    alert("Must contain at least 8 characters")
  } else if ( charNum > 128){
    alert("Must contain less than 128 characters")
  }

}

function questions() {
  specialChar = confirm("Do you want to include speical characters")
  includeNum = confirm("Do you want numbers included?")
  lowerCase = confirm("Do you want to include lowercase letters")
  upperCase = confirm("Do you want to include Uppercase letters")
}

const max = 128
const min = 8


function randomNumber() {
  console.log(Math.floor(Math.random() * 72) + 1);
}



