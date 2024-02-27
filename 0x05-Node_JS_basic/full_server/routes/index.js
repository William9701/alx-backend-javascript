const express = require('express');
const router = express.Router();

const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Link the route / to the AppController
router.get('/', AppController.getHomepage);

// Link the route /students and /students/:major to the StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
