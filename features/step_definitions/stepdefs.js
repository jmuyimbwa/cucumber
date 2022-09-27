// const assert = require('assert');
// const { Given, When, Then } = require('@cucumber/cucumber');

// function isItFriday(today) {
//   // We'll leave the implementation blank for now
// }

// Given('today is Sunday', function () {
//   this.today = 'Sunday';
// });

// When('I ask whether it\'s Friday yet', function () {
//   this.actualAnswer = isItFriday(this.today);
// });

// Then('I should be told {string}', function (expectedAnswer) {
//   assert.strictEqual(this.actualAnswer, expectedAnswer);
// });

// function isItFriday(today) {
//     return 'Nope,hang in there!';
//   }

//   Given('today is Friday', function () {
//     this.today = 'Friday';
//   });

// function isItFriday(today) {
//     if (today === "Friday") {
//       return "ITS A FRIDAYYYYYYY";
//     } else {
//       return "Nope,hang in there!";
//     }
//   }

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function isItFriday(today) {
  if (today === "Friday") {
    return "ITS A FRIDAYYYYYYY";
  } else {
    return "Nope,hang in there!";
  }
}

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});