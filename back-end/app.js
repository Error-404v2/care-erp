const express = require('express');
const fs = require('fs');
const app = express();
const { openDb, createDb, dbConnections, closeDb } = require('./db');

function formattedDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}/${month}/${day}-${hours}:${minutes}:${seconds}`;
}


openDb((err) => {
    if (err)
        console.error(err.message);
    else
        dbConnections(formattedDateTime());
});

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    dbConnections(formattedDateTime());
    next(); // Proceed to the next middleware/route handler
});

app.use(express.static('front-end'));

// Define the port number for the server
const port = 3000;

// Define a route handler for the root path '/'
app.get('/', (req, res) => {
    fs.readFile('front-end/index.html', (err, data) => {
        if (err) {
            res.status(500).send('Error loading index.html');
            return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
        dbConnections(formattedDateTime());
    });
});

// Start the server and listen for connections on the specified port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

// Close DB connection when the app is terminated
const closeOnExit = () => {
    closeDb();
    process.exit();
};

// Handle termination signals
process.on('SIGINT', closeOnExit);
process.on('SIGTERM', closeOnExit);
