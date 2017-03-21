'use strict';

const { Database } = require('sqlite3').verbose();

const db = new Database('bangazon.sqlite', () => console.log('Connected!'));

module.exports.customerInfo = () => {
    return "customer info"
}

db.run("CREATE TABLE IF NOT EXISTS customers (id INT, customer_name TEXT, street_address TEXT, city TEXT, state TEXT, postal_code INT, phone_number TEXT)");

const errorHandler = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  };
};

const populateCustomers = () => {
  const list = require('../data_base/customers.json');

  list.forEach(each => {
    db.run(`INSERT INTO customers VALUES (
      ${each.id},
      "${each.customer_name}",
      "${each.street_address}",
      "${each.city}",
      "${each.state}",
      ${each.postal_code},
      "${each.phone_number}"
    )`, errorHandler);
  })
};
// populateCustomers()

db.all("SELECT * FROM customers", (err, allRows) => {
  allRows.forEach(each => {
    console.log(each.id, each.customer_name, each.street_address, each.city, each.state, each.postal_code, each.phone_number);
  });
});

// db.close(err => {
//   errorHandler(err);
//   console.log('Database closed');
// })
