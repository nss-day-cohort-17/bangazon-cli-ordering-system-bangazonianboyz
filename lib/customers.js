'use strict';

const { Database } = require('sqlite3').verbose();

const db = new Database('bangazon.sqlite', () => console.log('Connected!'));

module.exports.customerInfo = () => {
    return "customer info"
}

db.run("CREATE TABLE IF NOT EXISTS customers (id INT, customer_name TEXT, street_address TEXT, city TEXT, state TEXT, postal_code INT, phone_number INT)");


const populateCustomers = () => {
  const { list } = require('./customers.json');

  list.forEach(each => {
    db.run(`INSERT INTO customers VALUES (
      ${each.id},
      "${each.customer_name}",
      "${each.street_address}",
      "${each.city}",
      "${each.state}",
      ${each.postal_code},
      ${each.phone_number}
    )`);
  })
};

db.all("SELECT * FROM customers", (err, allRows) => {
  allRows.forEach(each => {
    console.log(each.id, each.customer_name, each.street_address, each.city, each.state, each.postal_code, each.phone_number);
  });
});

const errorHandler = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  };
};

db.close(err => {
  errorHandler(err);
  console.log('Database closed');
})