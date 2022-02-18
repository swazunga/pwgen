// Assignment code here

function generatePassword() {
  var passLength = prompt(
    "How long would you like the password to be? Enter between 8-128."
  );
  console.log(passLength);
  if (passLength < 8) {
    alert("Number must be between 8-128 characters");
    return;
  } else if (passLength > 128) {
    alert("Number must be between 8-128 characters");
    return;
  }
  var availChar = "";
  var lowString = "abcdefghijklmnopqrstuvwxyz";
  var upString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var lowCase = prompt(
    "Would you like to include lowercase characters? Yes or No"
  );
  if (lowCase.toLowerCase() === "yes") {
    availChar = availChar + lowString;
  } else {
    return;
  }

  var upCase = prompt(
    "Would you like to include uppercase characters? Yes or No"
  );
  if (upCase.toLowerCase() === "yes") {
    availChar = availChar + upString;
  } else {
    return;
  }

  var addNumbs = prompt("Would you like to include numbers? Yes or no");
  if (addNumbs.toLowerCase() === "yes") {
    availChar = availChar + numbers;
  } else {
    return;
  }

  var addSpec = prompt(
    "Would you like to include special characters? Yes or No"
  );
  if (addSpec.toLowerCase() === "yes") {
    availChar = availChar + specialChar;
  } else {
    return;
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
