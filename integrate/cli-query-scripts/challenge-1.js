/*
  user input: employee first name
  logged data: that employee's last name
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const userInput = {
  name : process.argv[2],
  
};

const queryString = `
  SELECT lastName 
  FROM employees where firstName = "${userInput.name}";`;


(async () => {
  try {
    // open the database
    const db = await sqlite.open({
      filename: DB_PATH,
      driver: sqlite3.Database
    });

  db.close();
});

