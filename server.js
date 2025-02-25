// console.log("Starting");

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config(); // ✅ Loads environment variables

// → Creates your Express web server
const app = express();

const port = process.env.PORT || 5000;

// Middleware (if needed, add JSON parsing)
app.use(express.json()); // ✅ Helps parse JSON request bodies

// Routes
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
