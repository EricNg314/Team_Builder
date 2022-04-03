const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name='', employeeID='', emailAddress='') {
    super(name, employeeID, emailAddress);
  }
  addGithub(ghUserName) {
    this.ghUserName = ghUserName;
    this.ghLink = `https://github.com/${ghUserName}`
  }
}

module.exports = Engineer;
