// Assignment code here

function generatePassword() {
  var passLength = prompt(
    "How long would you like the password to be? Enter a number between 8-128."
  );
  while (passLength !== NaN) {
    passLength = prompt(
      "How long would you like the password to be? Enter a number between 8-128."
    );
    if (parseInt(passLength) > 0) {
      break;
    }
    if (passLength < 8 || passLength > 128) {
      alert("Number must be between 8-128");
      return generatePassword();
    }
  }

  console.log(passLength + " characters is your password length");

  var availChar = "";
  var lowString = "abcdefghijklmnopqrstuvwxyz";
  var upString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var lowBool = false;
  var upBool = false;
  var numBool = false;
  var specBool = false;

  var lowCase = prompt(
    "Would you like to include lowercase characters? Yes or No"
  );

  if (lowCase.toLowerCase() === "yes") {
    availChar = availChar + lowString;
    console.log("Your password may include lowercase letters.");
  } else if (lowCase.toLowerCase() === "no") {
    availChar = availChar - lowString;
    console.log("Your password will not include lowercase letters.");
  }

  while (lowBool === false) {
    if (lowCase === "yes" || lowCase === "no") {
      lowBool === true;
      break;
    }
    lowCase = prompt(
      "Would you like to include lowercase characters? Yes or No"
    );
  }
  var upCase = prompt(
    "Would you like to include uppercase characters? Yes or No"
  );
  if (upCase.toLowerCase() === "yes") {
    availChar = availChar + upString;
    console.log("Your password may include uppercase letters.");
  } else if (upCase.toLowerCase() === "no") {
    availChar = availChar - upString;
    console.log("Your password will not include uppercase letters.");
  }

  while (upBool === false) {
    if (upCase === "yes" || upCase === "no") {
      upBool === true;
      break;
    }
    upCase = prompt(
      "Would you like to include uppercase characters? Yes or No"
    );
  }

  var addNumbs = prompt(
    "Would you like to include numbers? Yes or No"
    );
  if (addNumbs.toLowerCase() === "yes") {
    availChar = availChar + numbers;
    console.log("Your password may include numbers.");
  } else if (addNumbs.toLowerCase() === "no") {
    availChar = availChar - numbers;
    console.log("Your password will not include numbers.";)
  }

  while (numBool === false) {
    if (addNumbs === "yes" || addNumbs === "no") {
      numBool === true;
      break;
    }
    addNumbs = prompt("Would you like to include numbers? Yes or No");
  }

  var addSpec = prompt(
    "Would you like to include special characters? Yes or No"
  );
  if (addSpec.toLowerCase() === "yes") {
    availChar = availChar + specialChar;
  } else if (addSpec.toLowerCase() === "no") {
    availChar = availChar - specialChar;
  }

  while (specBool === false){
    if (addSpec=== "yes" || addSpec === "no") {
      specBool === true;
      break;
    }
    addSpec = prompt("Would you like to include special characters? Yes or No")
  }

  var length = passLength,
    // charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
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


// The first question is repeating itself. 
// the numbers question is repeating itself.
// Need to figure out how to do the console log in the while loop (if a first response is wrong it skips the console statement)