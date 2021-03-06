'use strict';

const { Database } = require('sqlite3').verbose();

const db = new Database('bangazon.sqlite', () => console.log('Connected!'));

db.run("CREATE TABLE IF NOT EXISTS revenue (payment_type_id INT, payment_type TEXT, account_number TEXT)");

module.exports.getRev = () => {
  return[]
}

const errorHandler = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  };
};
const populateRevenue = () => {
  const list = require('../data_base/revenue.json');

  list.forEach(each => {
    db.run(`INSERT INTO revenue VALUES (
      ${each.payment_type_id},
      "${each.payment_type}",
      "${each.account_number}"
    )`, errorHandler);
  })
};
// populateRevenue()


db.all("SELECT * FROM revenue", (err, allRows) => {
  allRows.forEach(each => {
    console.log(each.payment_type_id, each.payment_type, each.account_number);
  });
});
