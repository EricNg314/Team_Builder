const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name='', employeeID='', emailAddress='') {
    super(name, employeeID, emailAddress);
  }
  addGithub(ghUserName) {
    this.ghUserName = ghUserName;
    this.ghLink = `https://github.com/${ghUserName}`
  }
  returnHtml() {
    return `
    <section class="col-4 p-2">
      <div class="card">
        <div class="card-body bg-primary text-light">
          <h2 class="card-title fs-4">${this.name}</h2>
          <div class="card-subtitle d-flex">
            <span class="material-icons">engineering</span>
            <h3 class="mx-1">
              <span>Engineer</span>
            </h3>
          </div>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.employeeID}</li>
            <li class="list-group-item">
              Email: <a class="card-link" href="mailto:${this.emailAddress}" target="_blank">${this.emailAddress}</a>
            </li>
            <li class="list-group-item">GitHub: <a class="card-link" href="${this.ghLink}" target="_blank">${this.ghUserName}</a></li>
          </ul>
        </div>
      </div>
    </section>`;
  }
}

module.exports = Engineer;
