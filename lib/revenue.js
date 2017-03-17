'use strict';

db.run("CREATE TABLE IF NOT EXISTS revenue (payment_type_id INT, payment_type TEXT, account_number INT)");

const populateCustomers = () => {
  const { list } = require('./revenue.json');

  list.forEach(each => {
    db.run(`INSERT INTO revenue VALUES (
      ${each.payment_type_id},
      "${each.payment_type}",
      ${each.account_number}
    )`);
  })
};

customerArray.forEach((obj) => {
  db.run(`INSERT INTO revenue VALUES (${obj.payment_type_id}, '${obj.payment_type}', ${obj.account_number})`);
});

db.all("SELECT * FROM revenue", (err, allRows) => {
  allRows.forEach(each => {
    console.log(each.payment_type_id, each.payment_type, each.account_number);
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
