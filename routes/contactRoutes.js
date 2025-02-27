const express = require('express');
const router = express.Router();
const {getContacts ,createContact ,getContact ,updateContact , deleteContact} = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken);
router.get('/', getContacts).post('/',createContact);
router.get('/:id', getContact).put('/:id',updateContact).delete('/:id', deleteContact);




module.exports = router; // ✅ Make sure to export the router!
