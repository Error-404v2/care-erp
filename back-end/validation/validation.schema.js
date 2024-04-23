const JOI = require("joi");

module.exports = {
  patientSchema: JOI.object({
    national_id: JOI.number().min(14).max(14).required(),
    firstName: JOI.string().required(),
    lastName: JOI.string().required(),
    nurse: JOI.boolean({ default: false }).allow(null),
    nurse_id: JOI.number().allow(null),
  }),
  nurseSchema: JOI.object({
    national_id: JOI.number().min(14).max(14).required(),
    firstName: JOI.string().required(),
    lastName: JOI.string().required(),
    notActive: JOI.date(),
    patients: JOI.array().items(JOI.number()),
  }),
};
