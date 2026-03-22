// Import the Express framework
// Express helps us create servers and APIs easily
const express = require("express");

// Import body-parser middleware
// It helps to read data coming from client requests (JSON, form data, text)
const bodyParser = require('body-parser');

// Import PORT value from configuration file
// This keeps configuration separate from application logic
const { PORT } = require('./config/server.config');

// Import the main API router
// This router will contain all API routes of your application
const apiRouter = require('./routes');


// Create an Express application instance
// 'app' represents your server
const app = express();


// Middleware: Parse incoming JSON data
// Example: { "name": "Naveen" }
app.use(bodyParser.json());


// Middleware: Parse URL encoded data
// Example: name=Naveen&age=21 (form submission)
app.use(bodyParser.urlencoded({ extended: true }));


// Middleware: Parse plain text data
// Example: raw text from request body
app.use(bodyParser.text());


// Route mapping
// Any request that starts with /api will be handled by apiRouter
// Example:
// /api/users
// /api/flights
// /api/bookings
app.use('/api', apiRouter);


// Health check route
// Used to check if server is running
// If we open http://localhost:PORT/ping it returns this message
app.get('/ping', (req, res) => {
    return res.json({
        message: 'Problem Service is alive'
    });
});


// Start the server
// app.listen tells Node.js to start listening for requests
// PORT comes from config file
app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});