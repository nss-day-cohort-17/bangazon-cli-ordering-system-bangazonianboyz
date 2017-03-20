//will be deleted; just using as a workspace

'use strict'

const {Database} = require('sqlite3')

const db = new Database('./data_base/bangazon.sqlite')

function createAll() {
	       createCustomers()
         createPaymentOptions()
         createOrders()
         createOrderLineItems()
         createProducts()
}

//delete customer data

function deleteData() {
      	 db.run(`DELETE FROM customers`)
      	 db.run(`DELETE FROM payment_options`)
      	 db.run(`DELETE FROM orders`)
      	 db.run(`DELETE FROM order_line_items`)
         db.run(`DELETE FROM products`)
}

//drop tables

function dropTables() {
      	 db.run(`DROP TABLE customers`)
      	 db.run(`DROP TABLE products`)
      	 db.run(`DROP TABLE payment_options`)
      	 db.run(`DROP TABLE orders`)
      	 db.run(`DROP TABLE order_line_items`)
}

// Export functions

module.exports = {createCustomers, createPaymentOptions, createProducts,
                 createOrders, createOrderLineItems, createAll, wipeData, dropTables}
