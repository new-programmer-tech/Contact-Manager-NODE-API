const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')


//@desc get all contact
//@route GET api/contact
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const allContacts = await Contact.find()
  console.log("allContacts", allContacts);
  res.status(200).json(allContacts);
})


// ============================================================

//@desc create new contact
//@route POST api/contact
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { name, email, phone } = req.body;

  // Validate required fields
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }

  // Create contact
  const contact = await Contact.create({ name, email, phone });

  console.log("Created contact:", contact);

  res.status(201).json({
    message: 'Contact created successfully',
    body:contact,
  });
});

// ============================================================


//@desc get contact
//@route GET/:id api/contact/id
//@access public
const getContact = asyncHandler(async (req, res) => {
  try {
    const contactById = await Contact.findById(req.params.id);
    console.log("contactById:::::::", contactById)

    if (!contactById) {
      console.log('if')
      return res.status(404).json({ error: 'Contact not found' }); // ✅ Return response properly
    }

    res.status(200).json({
      message: 'Contact fetched successfully',
      body: contactById
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return res.status(400).json({ error: 'Invalid contact ID' }); // ✅ Handle invalid IDs
  }
});

// ============================================================


//@desc update contact
//@route PUT/:id api/contact/id
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const contactById = await Contact.findById(req.params.id);
    console.log("contactById:::::::", contactById)

    if (!contactById) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const update = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )

  res.status(201).json({
      message: 'Contact updated successfully',
      body: update});
})

// ============================================================


//@desc delete contact
//@route DELETE/:id api/contact/id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  try {
    const contactById = await Contact.findById(req.params.id);

    if (!contactById) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const deleteContact = await Contact.deleteOne({ _id: req.params.id }); // Deletes the contact

    res.status(200).json({
      body: deleteContact,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return res.status(400).json({ error: 'Invalid contact ID' });
  }
});


// ============================================================



module.exports = {getContacts , createContact , getContact ,updateContact ,deleteContact}