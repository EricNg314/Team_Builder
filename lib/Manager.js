const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name='', employeeID='', emailAddress='') {
    super(name, employeeID, emailAddress);
  }
  addOfficeNumber(officeNumber) {
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;