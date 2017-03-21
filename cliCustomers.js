'use strict';

const { argv: [,,...args] } = process

  var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      address: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      city: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      state: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      zip_code: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
  };

// require prompt
var prompt = require('prompt')

// start the prompt
prompt.start();

// get properties needed from the user
prompt.get(schema, function (err, result) {

  console.log('command-line input received:')
  console.log(' First_Name: ' + result.First_Name)
  console.log(result)
  console.log(args)
})

module.exports = () => {

}

const { Database } = require("sqlite3").verbose();

const db = new Database('bangazon.sqlite');

//creates new customer
module.exports.createCustomers = () => {

  return new Promise((resolve, reject)=>{
    db.run(`INSERT INTO customers VALUES(null, "Michael", "Scott", "123 Dunder Miflin Dr", "Dunder Mifflin", "The Office", "10101", "123-456-7890")`,
      (err, data)=>{
          if(err) {
          reject(err)
          console.log(err)
        }
          else{
            resolve("success");
          }
    });
  })
};
