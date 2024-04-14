const sqlite3 = require('sqlite3').verbose();

// Function to initialize the database connection
const openDb = (callback) => {
  db = new sqlite3.Database('back-end/db/mainDB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
      return callback(err);
    }
    console.log('Connected to the mainDB.db database.');
    // Ensure the dbConnection table exists
    createDb();
    callback(null); // No error occurred, proceed with null error argument
  });
};

// Function to close the database connection
const closeDb = () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
  });
};

// Example of creating a table during initialization
const createDb = () => {
  db.run(`CREATE TABLE IF NOT EXISTS dbConnections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    connectionTime TEXT)`,
    (err) => {
      if (err)
        return console.error(err.message);
      console.log('Contacts table created or already exists.');
    });
};

const dbConnections = (connectionTime) => {
  db.serialize(() => {
    const stmt = db.prepare("INSERT INTO dbConnections (connectionTime) VALUES (?)");

    // Execute the prepared statement with the provided name and email
    stmt.run(connectionTime, (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(`A new dbConnections has been added: ${connectionTime}`);
    });

    // Finalize the statement to clean up
    stmt.finalize();

    // Optionally, if you want to log all entries in the dbConnections table
    // Adjust the SQL query as needed for your context
    db.each("SELECT id, connectionTime FROM dbConnections", (err, row) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(`${row.id}: ${row.connectionTime}`);
    });
  });
};

module.exports = {
  openDb,
  createDb,
  dbConnections,
  closeDb
};
