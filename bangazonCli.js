var prompt = require('cli-prompt');

prompt('Please enter your first name: ', function (val) {
  var first = val;
  prompt('Enter your last name: ', function (val) {
    console.log('Hello, ' + first  + ' ' + val + '!');
  })
})
