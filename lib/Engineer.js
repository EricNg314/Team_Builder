const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name='', employeeID='', emailAddress='') {
    super(name, employeeID, emailAddress);
  }
  addGithub(ghUserName, ghLink) {
    this.ghUserName = ghUserName;
    this.ghLink = ghLink;
  }
}

module.exports = Engineer;
