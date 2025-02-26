// console.log("Starting");

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb =require('./config/dbConnection')
require('dotenv').config(); // ✅ Loads environment variables

// → Creates your Express web server
const app = express();

const port = process.env.PORT || 5000;

// Middleware (if needed, add JSON parsing)
app.use(express.json()); // ✅ Helps parse JSON request bodies

// Routes
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler)

connectDb()

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
