//@desc get all contact
//@route GET api/contact
//@access public
const getContacts = (req , res) => {
  res.status(200).json({ message: 'get API' });
}

//@desc create new contact
//@route POST api/contact
//@access public
const createContact = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error ('all fields are mandatory')
  }
  res.status(201).json({ message: 'created API' });
}

//@desc get contact
//@route GET/:id api/contact/id
//@access public
const getContact = (req , res) => {
  res.status(200).json({ message: 'get API ' });
}

//@desc update contact
//@route PUT/:id api/contact/id
//@access public
const updateContact = (req , res) => {
  res.status(200).json({ message: 'update ' });
}

//@desc delete contact
//@route DELETE/:id api/contact/id
//@access public
const deleteContact = (req , res) => {
  res.status(200).json({ message: 'get API ' });
}


module.exports = {getContacts , createContact , getContact ,updateContact ,deleteContact}