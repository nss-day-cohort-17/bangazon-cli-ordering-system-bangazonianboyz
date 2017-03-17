const { Database } = require('sqlite3').verbose();

const db = new Database('example.sqlite', () => console.log('Connected!'));
