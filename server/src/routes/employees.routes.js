//Router moddule will allow us to save routes
const { Router } = require('express');

//Define router element
const router = Router();

//Import controller which has all functions
const employeesCtrl = require('../controllers/employees.controler');

//Define CRUD routes
//CREATE - READ - UPDATE - DELETE
router.get('/', employeesCtrl.getEmployees);
router.post('/', employeesCtrl.createEmployees);
router.get('/:id', employeesCtrl.getEmployee);
router.put('/:id', employeesCtrl.editEmployee);
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;
