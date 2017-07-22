// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string



  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var cardLength = cardNumber.length;

  var cardPrefixCheck = function(prefix) {
    return cardNumber.startsWith(prefix);
    };

  var cardPrefixRangeCheck = function(start, end) {
    for (var prefix = start; prefix <= end; prefix++) {
      if(cardPrefixCheck(prefix)) {
        return true;
      }
    }
      return false;
  };

  var cardPrefixArrayCheck = function(array) {
    for (var i = 0; i < array.length; i++) {
      if(cardPrefixCheck(array[i])) {
        return true;
      }
    } return false;
  };

  var cardLengthArrayCheck = function(array) {
    for (var i = 0; i < array.length; i++) {
      if(cardLength === array[i]) {
          return true;
      }
    } return false;
  };
    
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  var dinerPrefix = [38, 39];

  if((cardPrefixArrayCheck(dinerPrefix)) && cardLength === 14) {
    return 'Diner\'s Club';
  };



  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var amexPrefix = [34, 37];
  if((cardPrefixArrayCheck(amexPrefix))) {
    return 'American Express';
  }



  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  
  if(cardPrefixCheck(4) && cardLengthArrayCheck([13, 16, 19])) {
    return 'Visa';
  }




  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  var masterCardArray = [51, 52, 53, 54, 55]
  if(cardPrefixArrayCheck(masterCardArray) && cardLength === 16) {
    return 'MasterCard';
  }


  
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  var discoverArray = [6011, 644, 645, 646, 647, 648, 649, 65];

  if(cardPrefixArrayCheck(discoverArray) && cardLengthArrayCheck([16, 19])) {
    return 'Discover';
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.   
  var maestroPrefix = [5018, 5020, 5038, 6304];
  var maestroLengthArray = [12, 13, 14, 15, 16, 17, 18, 19];

  if(cardPrefixArrayCheck(maestroPrefix) && cardLengthArrayCheck(maestroLengthArray)) {
    return 'Maestro';
  }


  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var chinaUPrefix = [];
  var chinaULength = [16, 17, 18, 19];

  for(var i = 622126; i <= 622925; i ++) {
    chinaUPrefix.push(i);
  }

  for(var i = 624; i <= 626; i ++ ) {
    chinaUPrefix.push(i);
  }

  for(var i = 6282; i <= 6288; i++) {
    chinaUPrefix.push(i);
  }

  if(cardPrefixArrayCheck(chinaUPrefix) && cardLengthArrayCheck(chinaULength)) {
    return 'China UnionPay';

  }
  return 'invalid';
};



// var assert = function(outcome, description) {
//     if(outcome === true) {
//         return 'passed';
//     } else {
//         return description;
//     }
// };

// // Diner's Club Tests
// var dC = "Diner's Club";
// assert((detectNetwork('38345678901234') === dC), "Expected " + dC +" but got " + detectNetwork('38345678901234') );
// assert((detectNetwork('39345678901234') === dC), "Expected " + dC +" but got " + detectNetwork('39345678901234') );

// // // American Express Tests
// var aE = "American Express";
// assert((detectNetwork('343456789012345') === aE), "Expected " + aE +" but got " + detectNetwork('343456789012345') );
// assert((detectNetwork('373456789012345') === aE), "Expected " + aE +" but got " + detectNetwork('373456789012345') );

// // Visa Tests
// var visa = "Visa";
// assert((detectNetwork('4123456789012') === visa), "Expected " + visa +" but got " + detectNetwork('4123456789012') );
// assert((detectNetwork('4123456789012345') === visa), "Expected " + visa +" but got " + detectNetwork('4123456789012345') );
// assert((detectNetwork('4123456789012345678') === visa), "Expected " + visa +" but got " + detectNetwork('4123456789012345678') );

// // MasterCard Tests
// var mC = "MasterCard";
// assert((detectNetwork('5112345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5112345678901234') );
// assert((detectNetwork('5212345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5212345678901234') );
// assert((detectNetwork('5312345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5312345678901234') );
// assert((detectNetwork('5412345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5412345678901234') );
// assert((detectNetwork('5512345678901234') === mC), "Expected " + mC +" but got " + detectNetwork('5512345678901234') );


// var testArray = [   '38345678901234',
//                     '39345678901234',
//                     '343456789012345',
//                     '373456789012345',
//                     '4123456789012',
//                     '4123456789012345',
//                     '4123456789012345678',
//                     '5112345678901234',
//                     '5212345678901234',
//                     '5312345678901234',
//                     '5412345678901234',
//                     '5512345678901234'  ];

// // Invoke All Tests
// var invokeTests = function() {
//     for (i = 0; i < testArray.length; i++ ) {
//     var cardType = assert(detectNetwork(testArray[i]));
//     console.log(cardType);
//     }
// }
