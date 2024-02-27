const express = require('express');
const app = express();
const routes = require('./routes/index');

// Use the routes defined in full_server/routes/index.js
app.use('/', routes);

// Define the port
const port = 1245;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export the app
module.exports = app;