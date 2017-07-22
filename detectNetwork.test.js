/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

 /* it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });  */

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('3934567890123') == 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  
  it("has a prefix of 51 and a length of 16", function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it("has a prefix of 52 and a length of 16", function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it("has a prefix of 53 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

 
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.


describe('Discover', function() {
  
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011567890123456').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011567890123456789').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    

    (function(prefix) {
      var cardNumber16 = prefix + "4567890123456"; // Why did moving this into the IIFE solve the problem?
      var cardNumber19 = cardNumber16 + "789";

      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(cardNumber16).should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(cardNumber19).should.equal('Discover');
      });
    })(prefix)
  };

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6534567890123456').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6534567890123456789').should.equal('Discover');
  });
});

//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  var maestroPrefix = [5018, 5020, 5038, 6304];
  var maestroLengthArray = [12, 13, 14, 15, 16, 17, 18, 19];
  

  for(var i = 0; i < maestroPrefix.length; i ++) {
    for(var j = 0; j < maestroLengthArray.length; j++) {
      (function(prefix, length) {
        var cardNumber = '567890123456789';
        var cardGenerate = cardNumber.substr(0, length - prefix.toString().length);
            cardGenerate = prefix + cardGenerate;
        it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(cardGenerate).should.equal('Maestro');
        });

      })(maestroPrefix[i], maestroLengthArray[j]);
    }
  }
});


// Excellent work! Write your own tests and make them pass for the last two networks:
describe('China UnionPay', function() {
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var should = chai.should();
  var chinaUPrefix = [];
  var chinaULength = [16, 17, 18, 19]

  for(var i = 622126; i <= 622925; i ++) {
    chinaUPrefix.push(i);
  }

  for(var i = 624; i <= 626; i ++ ) {
    chinaUPrefix.push(i);
  }

  for(var i = 6282; i <= 6288; i++) {
    chinaUPrefix.push(i);

  }

  for(var i = 0; i < chinaUPrefix.length; i++) {
    for(var j = 0; j < chinaULength.length; j++) {
      (function(prefix, length){
        // Create the card Number to test
        var cardNumber = "1234567890123456"; // 19 max length - 3 min length = 16 max non prefix characters
        var cardGenerate = cardNumber.substr(0, length - prefix.toString().length);
        cardGenerate = prefix + cardGenerate;
        // Create the Test
        it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(cardGenerate).should.equal('China UnionPay');
        });

      })(chinaUPrefix[i], chinaULength[j])

    }
  }
});

describe('Switch', function () {
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var should = chai.should();
  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var switchLength = [16, 18, 19];
  
  for(var i = 0; i < switchPrefix.length; i++) {
    for(var j = 0; j < switchLength.length; j++) {
      (function(prefix, length){
        // Create the card Number to test
        var cardNumber = "123456789012345"; // 19 max length - 4 min length = 15 max non prefix characters
        var cardGenerate = cardNumber.substr(0, length - prefix.toString().length);
        cardGenerate = prefix + cardGenerate;
        // Create the Test
        it(('has a prefix of ' + prefix + ' and a length of ' + length), function() {
          detectNetwork(cardGenerate).should.equal('Switch');
        });

      })(switchPrefix[i], switchLength[j])

    }
  }

});

// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

// When detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, and Switch you can invoke nextStep: 