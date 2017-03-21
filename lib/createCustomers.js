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
