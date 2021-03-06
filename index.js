const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlTemplate = require("./lib/htmlTemplate");

async function buildHTML() {
  let htmlInfoStr = "";
  const filename = "./sample/index.html";
  const employeesStr = await selectEmployeeMenu();
  htmlInfoStr = htmlTemplate(employeesStr)
  console.log(htmlInfoStr);
  fs.writeFile(filename, htmlInfoStr, (err) =>
    err ? console.log(err) : console.log(`Success! Please check ${filename}`)
  );
}

// let needEmployee = true;
const selectEmployeeMenu = async () => {
  let infoStr = "";
  let needEmployee = true;
  while (needEmployee === true) {
    await inquirer
      .prompt([
        {
          name: "role",
          type: "list",
          message: "What role type?",
          choices: ['Manager','Engineer','Intern'],
          validate: (answer) => {
            if (answer) {
              return true;
            } else {
              console.log("Please select a type.");
            }
          }
        }
      ])
      .then(async (data) => {
        const { role } = data;
        if(role == 'Manager'){
          infoStr += await buildManager();
        } else if(role == 'Engineer'){
          infoStr += await buildEngineer();
        } else if(role == 'Intern'){
          infoStr += await buildIntern();
        }
        needEmployee = await addMore();
        console.log('needEmployee? ', needEmployee)
      });
    }
  return infoStr;
}

const addMore = async () => {
  let addMoreEmp = false;
  await inquirer
    .prompt([
      {
        name: "moreEmployees",
        type: "confirm",
        message: "Add more employees?",
      }
    ])
    .then(async (data) => {
      const { moreEmployees } = data;
      addMoreEmp = moreEmployees
    });
    return addMoreEmp;
}

const buildManager = async () => {
  let managerStr = "";
  await inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Manager Name:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide a name.");
          }
        }
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
        }
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
        }
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
        }
      },
    ])
    .then((data) => {
      const { name, empId, email, officeNumb } = data;
      const manager = new Manager(name, empId, email);
      manager.addOfficeNumber(officeNumb);
      managerStr = manager.returnHtml();
    });
  return managerStr;
};

const buildEngineer = async () => {
  let engineerStr = "";
  await inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Engineer Name:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide a name.");
          }
        }
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
        }
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
        }
      },
      {
        name: "gitHub",
        type: "input",
        message: "Github username:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide an github username.");
          }
        }
      }
    ])
    .then((data) => {
      const { name, empId, email, gitHub } = data;
      const engineer = new Engineer(name, empId, email);
      engineer.addGithub(gitHub);
      engineerStr = engineer.returnHtml();
    });
  return engineerStr;
};


const buildIntern = async () => {
  let internStr = "";
  await inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Intern Name:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide a name.");
          }
        }
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
        }
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
        }
      },
      {
        name: "school",
        type: "input",
        message: "School name:",
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            console.log("Please provide an school username.");
          }
        }
      }
    ])
    .then((data) => {
      const { name, empId, email, school } = data;
      const intern = new Intern(name, empId, email);
      intern.addSchool(school);
      internStr = intern.returnHtml();
    });
  return internStr;
};

buildHTML();
