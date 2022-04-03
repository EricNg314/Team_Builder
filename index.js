const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

async function buildHTML() {
  let htmlInfoStr = "";
  const filename = "./sample/index.html";
  const managerStr = await buildManager();

  htmlInfoStr += `${managerStr}`;
  console.log(htmlInfoStr);
  fs.writeFile(filename, htmlInfoStr, (err) =>
    err ? console.log(err) : console.log(`Success! Please check ${filename}`)
  );
}


const buildManager = async () => {
  let managerStr = "";
  await inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Name:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide a name.");
          }
        },
      },
      {
        name: "empId",
        type: "input",
        message: "Employee ID:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide a employee ID.");
          }
        },
      },
      {
        name: "email",
        type: "input",
        message: "Email:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide a email.");
          }
        },
      },
      {
        name: "officeNumb",
        type: "input",
        message: "Office Number:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide an office number.");
          }
        },
      },
    ])
    .then((data) => {
      const { name, empId, email, officeNumb } = data;
      const manager = new Manager(name, empId, email);
      manager.addOfficeNumber(officeNumb);
      managerStr = `
      <p>${manager.name}</p>
      <p>${manager.employeeID}</p>
      <p>${manager.emailAddress}</p>
      <p>${manager.officeNumber}</p>`;
    });
  return managerStr;
};


buildHTML();
