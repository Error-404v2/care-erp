const {
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patient.controller");
const Router = require("express").Router();

Router.post("/create", createPatient);
Router.patch("/update", updatePatient);
Router.delete("/delete", deletePatient);

module.exports = Router;
