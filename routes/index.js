const express = require('express');
const { appendFile } = require('fs');

const router = express.Router();

//access home_controller.js
const homeController = require('../controllers/home_controller');

//check if router loaded or not
console.log("Router Loaded");

router.get('/',homeController.home);

module.exports = router;