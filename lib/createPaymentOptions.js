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
