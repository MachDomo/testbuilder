// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardArray = Array.from(cardNumber);
  var cardLength = cardArray.length;

  if(cardArray[0] == 3) {
    if((cardArray[1] == 8 || cardArray[1] == 9) && cardLength === 14) {
        return "Diner's Club";

    } else if((cardArray[1] == 4 || cardArray[1] == 7) && cardLength === 15) {
        return "American Express";
    }
    } else if (cardArray[0] == 4) {
        if (cardLength === 13 || cardLength === 16 || cardLength === 19) {
            return "Visa";
        }
    } else if (cardArray[0] == 5) {
        if (cardArray[1] >= 1 && cardArray[1] <= 6 && cardLength === 16) {
            return "MasterCard";
    } else return "Invalid Card Number";
  }
};

function assert(outcome, description) {
    if(outcome === true) {
        return 'passed';
    } else {
        return description;
    }
}

// Diner's Club Tests
var dC = "Diner's Club";
assert((detectNetwork('38345678901234') === dC), "Expected " + dC +" but got " + detectNetwork('38345678901234') );
assert((detectNetwork('39345678901234') === dC), "Expected " + dC +" but got " + detectNetwork('39345678901234') );

// American Express Tests
var aE = "American Express";
assert((detectNetwork('343456789012345') === aE), "Expected " + aE +" but got " + detectNetwork('343456789012345') );
assert((detectNetwork('373456789012345') === aE), "Expected " + aE +" but got " + detectNetwork('373456789012345') );

// Visa Tests
var visa = "Visa";
assert((detectNetwork('4123456789012') === visa), "Expected " + visa +" but got " + detectNetwork('4123456789012') );
assert((detectNetwork('4123456789012345') === visa), "Expected " + visa +" but got " + detectNetwork('4123456789012345') );
assert((detectNetwork('4123456789012345678') === visa), "Expected " + visa +" but got " + detectNetwork('4123456789012345678') );

// MasterCard Tests
var mC = "MasterCard";
assert((detectNetwork('5112345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5112345678901234') );
assert((detectNetwork('5212345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5212345678901234') );
assert((detectNetwork('5312345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5312345678901234') );
assert((detectNetwork('5412345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5412345678901234') );
assert((detectNetwork('5512345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5512345678901234') );


var = testArray [
                    38345678901234,
                    39345678901234,
                    343456789012345,
                    373456789012345,
                    4123456789012345,
                    4123456789012345678,
                    5112345678901234,
                    5212345678901234,
                    5312345678901234,
                    5412345678901234,
                    5512345678901234   ];