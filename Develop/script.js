// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = "0123456789"
let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"



// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);

let passCharacters = "";
function passwordGenerator() {

    length = prompt("how many characters do you want");
    
    if (length < 8) {
      alert("Must contain at least 8 characters")
      return
    } else if ( length > 128){
      alert("Must contain less than 128 characters")
      return
    }
    
    alerts()



    

    var password = "";
    for (let i = 0; i < length; i++) {
      password += passCharacters[Math.floor(Math.random() * passCharacters.length)]
    }

    passwordText.textContent = password
}


function alerts() {
  
  let lowerCaseAlert = confirm("Do you want lowercase letters?")
  if (lowerCaseAlert) {
     passCharacters += lowerCase;
}

  let upperCaseAlert = confirm('Do you want upper case letters?')
  if (upperCaseAlert) {
   passCharacters += upperCase;
}

  let numbersAlert = confirm('Do you want numbers?')
  if (numbersAlert) {
   passCharacters += numbers;
}

  let specialAlert = confirm('Do you want special characters?')
  if (specialAlert) {
    passCharacters += specialChar;
}

}