// Require in the Database method from the sqlite3 module
// We will be using the verbose execution mode, which will help with debugging errors.
const { Database } = require('sqlite3').verbose();

// Returns a new database object and automatically opens the database
// Database method accepts a callback function for successful connection
const db = new Database('data_base/bangazon.sql', () => console.log('Connected!'));

// Creates a database which will be written to a file on disk
// Changes will persist once connection closes
const db = new Database('data_base/bangazon.sql');
