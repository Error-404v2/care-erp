const express = require('express');
const app = express();

// Define the port number for the server
const port = 3000;

// Define a simple route handler for the root path '/'
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Start the server and listen for connections on the specified port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});