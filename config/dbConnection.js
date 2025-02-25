const mongoose = require('mongoose')
const port=27017
const connectDb = async() => {
  try {
    const connect = await mongoose.connect(`mongodb://localhost:${port}/contact-manager`)
    console.log("db connection established::" , connect.connection.host , connect.connection.name);

  } catch (error) {
    console.log(error);
    process.exit(1)

  }
}

module.exports = connectDb