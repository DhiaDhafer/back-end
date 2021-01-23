const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: {
    type: String
  },
  parssword: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  yellowAvertisment: {
    type: Number
  },
  readAvertisment: {
    type: Number
  }
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;

