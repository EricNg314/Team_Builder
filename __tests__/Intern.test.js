const Intern = require('../lib/Intern');

test('creates an Intern', () => {
  const intern = new Intern('John', '02', 'example@example.com');

  expect(intern.name).toBe('John');
  expect(intern.employeeID).toBe('02');
  expect(intern.emailAddress).toBe('example@example.com');
})

test('adds school to Intern', () => {
  const intern = new Intern('John', '02', 'example@example.com');
  intern.addSchool('MySchool')

  expect(intern.schoolName).toBe('MySchool');
})