// Assignment code here
var availChar = "";
var lowString = "abcdefghijklmnopqrstuvwxyz";
var upString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lowBool = false;
var upBool = false;
var numBool = false;
var specBool = false;

function generatePassword() {
  console.clear();
  availChar = "";
  // This is the prompt for # of characters
  var passLength = "";
  while (passLength !== NaN) {
    passLength = prompt(
      "How long would you like the password to be? Enter a number between 8-128."
    );
    if (passLength === null) return;
    if (passLength < 8 || passLength > 128) {
      alert("Number must be between 8-128");
      return generatePassword();
    }
    if (parseInt(passLength) > 0) {
      break;
    }
  }
  console.log(passLength + " characters is your password length");
  // this is the prompt for lowercase letters
  var lowCase = prompt(
    "Would you like to include lowercase characters? Yes or No"
  );
  if (lowCase === null) return;
  while (lowBool === false) {
    if (lowCase.toLowerCase() === "yes" || lowCase.toLowerCase() === "no") {
      lowBool === true;
      if (lowCase.toLowerCase() === "yes") {
        availChar = availChar + lowString;
        console.log("Your password may include lowercase letters.");
      } else if (lowCase.toLowerCase() === "no") {
        console.log("Your password will not include lowercase letters.");
      }
      break;
    }
    lowCase = prompt(
      "Would you like to include lowercase characters? Yes or No"
    );
  }
  // this is the prompt for uppercase letters
  var upCase = prompt(
    "Would you like to include uppercase characters? Yes or No"
  );
  if (upCase === null) return;
  while (upBool === false) {
    if (upCase.toLowerCase() === "yes" || upCase.toLowerCase() === "no") {
      upBool === true;
      if (upCase.toLowerCase() === "yes") {
        availChar = availChar + upString;
        console.log("Your password may include uppercase letters.");
      } else if (upCase.toLowerCase() === "no") {
        console.log("Your password will not include uppercase letters.");
      }
      break;
    }
    upCase = prompt(
      "Would you like to include uppercase characters? Yes or No"
    );
  }
  // this is the prompt for numbers
  var addNumbs = prompt("Would you like to include numbers? Yes or No");
  if (addNumbs === null) return;
  while (numBool === false) {
    if (addNumbs.toLowerCase() === "yes" || addNumbs.toLowerCase() === "no") {
      numBool === true;
      if (addNumbs.toLowerCase() === "yes") {
        availChar = availChar + numbers;
        console.log("Your password may include numbers.");
      } else if (addNumbs.toLowerCase() === "no") {
        console.log("Your password will not include numbers.");
      }
      break;
    }
    addNumbs = prompt("Would you like to include numbers? Yes or No");
  }
  // this is the promopt for special characters
  var addSpec = prompt(
    "Would you like to include special characters? Yes or No"
  );
  if (addSpec === null) return;
  while (specBool === false) {
    if (addSpec.toLowerCase() === "yes" || addSpec.toLowerCase() === "no") {
      specBool === true;
      if (addSpec.toLowerCase() === "yes") {
        availChar = availChar + specialChar;
        console.log("Your password may include special characters.");
      } else if (addSpec.toLowerCase() === "no") {
        console.log("Your password will not include special characters.");
      }
      break;
    }
    addSpec = prompt("Would you like to include special characters? Yes or No");
  }

  if (availChar === "") {
    alert("You must answer YES to at least one of the criteria.");
    return generatePassword();
  }

  var length = passLength,
    retVal = "";
  for (var i = 0, n = availChar.length; i < length; ++i) {
    retVal += availChar.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
