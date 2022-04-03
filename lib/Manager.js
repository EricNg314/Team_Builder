const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name='', employeeID='', emailAddress='') {
    super(name, employeeID, emailAddress);
  }
  addOfficeNumber(officeNumber) {
    this.officeNumber = officeNumber;
  }
  returnHtml() {
    return `
    <section class="col-4 p-2">
      <div class="card">
        <div class="card-body bg-primary text-light">
          <h2 class="card-title fs-4">${this.name}</h2>
          <div class="card-subtitle d-flex">
            <span class="material-icons">supervisor_account</span>
            <h3 class="mx-1">
              <span>Manager</span>
            </h3>
          </div>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.employeeID}</li>
            <li class="list-group-item">
              Email: <a class="card-link" href="mailto:${this.emailAddress}" target="_blank">${this.emailAddress}</a>
            </li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
          </ul>
        </div>
      </div>
    </section>`;
  }
}

module.exports = Manager;