const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    res.status(400)
    throw new Error('provide all details')
  }

  const userAvailable = await User.find({ email })
  console.log('userAvailable:::::', userAvailable)
  if (userAvailable.length > 0) {
    res.status(400)
    throw new Error('user already exists')
  }

  //password hashed
  const hashedPass = await bcrypt.hash(password, 10)
  const userDetails = await User.create({
    username,
    email,
    password: hashedPass
  })

  console.log('userDetails:::::', userDetails)

  if (userDetails) {
    res.status(201).json({
      message: 'user created successfully',
      email: userDetails.email
    })
  }
}
)

// -----------------------------------------------------------


const loginUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  // Check if both fields are provided
  if (!email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Find user by email
  const user = await User.findOne({ email });
  console.log('user::', user);

  // Validate password
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("Password matched");

    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30m' }
    );

    console.log('accessToken::::', accessToken);
    return res.status(200).json({ accessToken });
  } else {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
});


// -------------------------------------------------------------

const currentUser = asyncHandler(async(req , res) => {
  res.status(200).json({
    message: 'current user data',
    body: req.user
  })
})



module.exports = { registerUser, loginUser ,currentUser }