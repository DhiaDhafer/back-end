const avertismentService = require("../services/avertisment.service.js");

module.exports = {
  async getAvertismentById(req, res, next) {
    try {

      const avertisment = await avertismentService.getAvertismentById(req.params);
      res.send(avertisment);
    } catch (error) {
      // handle error
      res.send("error");
    }
  },

  async updateAvertisementById(req, res, next) {
    try {
      const avertisement = await avertismentService.updateStudentById(req.params,req.body);
      res.send(avertisment);
    } catch (error) {
      res.send(error);
    }
  }
};