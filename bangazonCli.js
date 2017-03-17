//will be deleted; just using as a workspace

'use strict'

const {Database} = require('sqlite3')

const db = new Database('./data_base/bangazon.sqlite')

//create customers

function createCustomers() {
    	   db.run(`CREATE TABLE IF NOT EXISTS 'customers' (
    		 'customerId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    		 'name' TEXT,
    		 'address' TEXT,
    		 'city' TEXT,
    		 'state' TEXT,
    		 'postalCode' TEXT,
    		 'phoneNumber' TEXT
    		 );`)
}

//create payment options

function createPaymentOptions() {
    		 db.run(`CREATE TABLE IF NOT EXISTS 'payment_options' (
    		 'paymentOptionId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    		 'paymentName' TEXT,
    		 'accountNumber' TEXT,
    		 'customerId' INTEGER,
    		 FOREIGN KEY('customerId') REFERENCES 'customers'('customerId')
    		 );`)
}

//create orders

function createOrders() {
         db.run(`CREATE TABLE IF NOT EXISTS 'orders' (
         'orderId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
         'paymentOptionId' INTEGER NOT NULL,
         'paidInFull' INTEGER CHECK(paidInFull = 1 or paidInFull = -1),
         FOREIGN KEY ('paymentOptionId') REFERENCES payment_options(paymentOptionId)
         );`)
}

//create line items

function createOrderLineItems() {
      	 db.run(`CREATE TABLE IF NOT EXISTS 'order_line_items' (
      	 'lineItemId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
      	 'orderId' INTEGER NOT NULL,
      	 'productId' INTEGER NOT NULL,
      	 FOREIGN KEY ('orderId') REFERENCES orders(orderId),
      	 FOREIGN KEY ('productId') REFERENCES products(productId)
      	 );`)
}

//create products

function createProducts() {
      	 db.run(`CREATE TABLE IF NOT EXISTS 'products' (
      	 'productId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
      	 'productName' INTEGER,
      	 'productPrice' INTEGER
      	 );`)
}

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
