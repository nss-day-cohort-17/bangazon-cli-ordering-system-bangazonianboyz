'use strict';

const { Database } = require('sqlite3').verbose();

const db = new Database('bangazon.sqlite', () => console.log('Connected!'));

db.run("CREATE TABLE IF NOT EXISTS orders (order_id INT, customer_id INT, payment_option_id INT, paid_off TEXT)");

const errorHandler = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  };
};

const populateOrders = () => {
  const list  = require('../data_base/orders.json');

  list.forEach(each => {
    db.run(`INSERT INTO orders VALUES (
      ${each.order_id},
      ${each.customer_id},
      ${each.payment_option_id},
      "${each.paid_off}"
    )`, errorHandler);
  })
};
populateOrders()

db.all("SELECT * FROM orders", (err, allRows) => {
  allRows.forEach(each => {
    console.log(each.order_id, each.customer_id, each.payment_option_id, each.paid_off);
  });
});



db.close(err => {
  errorHandler(err);
  console.log('Database closed')
});
