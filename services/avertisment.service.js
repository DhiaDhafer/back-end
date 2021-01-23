module.exports = new (class AvertismentService {
  constructor() {
    this.student = require("../models/student.model.js");
  }
  getAvertismentById({_id}) {
    return this.student.findById(_id)
  }

  updateStudentById({_id},payload) {
    return this.student.findByIdAndUpdate(_id,payload);
  }
})();