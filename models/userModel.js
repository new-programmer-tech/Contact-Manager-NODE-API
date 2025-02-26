const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'please add username'],
      unique:[true , 'user name already taken']
    },

    email: {
      type: String,
      required: [true, 'please add email address'],
      unique:[true , 'email name already taken']
    },

    password: {
      type: String,
      required: [true, 'please add password']
    }
  },
{
  timestamp:true
}

)

module.exports =mongoose.model('User', userSchema)