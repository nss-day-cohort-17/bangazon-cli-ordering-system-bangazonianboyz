'use strict';

const { Database } = require('sqlite3').verbose();

const db = new Database('bangazon.sqlite', () => console.log('Connected!'));

module.exports.getProduct = () => {
  return[]
}

db.run("CREATE TABLE IF NOT EXISTS products (product_id INT, product_name TEXT, product_price INT)");

const populateCustomers = () => {
  const { list } = require('./products.json');

  list.forEach(each => {
    db.run(`INSERT INTO products VALUES (
      ${each.product_id},
      ${each.product_name},
      ${each.product_price},
    )`);
  })
};

db.all("SELECT * FROM products", (err, allRows) => {
  allRows.forEach(each => {
    console.log(each.product_id, each.product_name, each.product_price);
  });
});

const errorHandler = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  };
};

db.close(err => {
  errorHandler(err);
  console.log('Database closed')
});
