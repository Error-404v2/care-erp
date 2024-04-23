const { patientSchema } = require("../validation/validation.schema");

module.exports = {
  createPatient: async (req, res) => {
    try {
      const patientBody = req.body;
      const { error } = patientSchema.validate(patientBody);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      // Code to create a patient
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updatePatient: async (req, res) => {
    const patientBody = req.body;
    const { error } = patientSchema.validate(patientBody);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    // Code to update a patient
  },
  deletePatient: async (req, res) => {
    const { national_id } = req.body;
    const { error } = patientSchema.validate({ national_id });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    // Code to delete a patient
  },
};
