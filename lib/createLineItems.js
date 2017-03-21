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
