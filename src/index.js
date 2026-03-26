const express = require("express");
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require("./errors/base.error");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");


const app = express();

// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Route mapping
app.use('/api', apiRouter);

// Health check route
app.get('/ping', (req, res) => {
    return res.json({
        message: 'Problem Service is alive'
    });
});
//last middleware if any error occurs
app.use(errorHandler);

// ❗ Global Error Handler
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

// Start server
app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
    

   
});