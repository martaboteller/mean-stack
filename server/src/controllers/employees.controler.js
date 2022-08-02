//Import model
const Employee = require('../models/Employee');

//Define controller object that will store all functions
const employeeCtr = {};

//GET ALL EMPLOYEES
employeeCtr.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.json(employees);
};

//CREATE A NEW EMPLOYEE
employeeCtr.createEmployees = async (req, res, next) => {
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  await employee.save({ validateBeforeSave: false });
  res.json({ status: 'Employee created' });
};

//GET ONE EMPLOYEE BY ID
employeeCtr.getEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

//EDIT ONE EMPLOYEE BY ID
employeeCtr.editEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, { $set: req.body }, { new: true });
  res.json({ status: 'Employee Updated' });
};

//DELETE ONE EMPLOYEE BY ID
employeeCtr.deleteEmployee = async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: 'Employee Deleted' });
};

//const hello = (req, res) => res.send('Hello');

module.exports = employeeCtr;
