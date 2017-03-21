//create orders

function createOrders() {
         db.run(`CREATE TABLE IF NOT EXISTS 'orders' (
         'orderId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
         'paymentOptionId' INTEGER NOT NULL,
         'paidInFull' INTEGER CHECK(paidInFull = 1 or paidInFull = -1),
         FOREIGN KEY ('paymentOptionId') REFERENCES payment_options(paymentOptionId)
         );`)
}
