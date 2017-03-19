//create products

function createProducts() {
      	 db.run(`CREATE TABLE IF NOT EXISTS 'products' (
      	 'productId' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
      	 'productName' INTEGER,
      	 'productPrice' INTEGER
      	 );`)
}
