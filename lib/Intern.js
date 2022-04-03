const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name='', employeeID='', emailAddress='') {
    super(name, employeeID, emailAddress);
  }
  addSchool(schoolName) {
    this.schoolName = schoolName;
  }
}

module.exports = Intern;
