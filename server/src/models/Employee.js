//Import modules that will allow us define the model
const { Schema, model } = require('mongoose');

//Create schema
const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  {
    timestamps: true, //create timestamps
    versionKey: false, //avoid unnecessary __vo values
  }
);

module.exports = model('Employee', employeeSchema);
