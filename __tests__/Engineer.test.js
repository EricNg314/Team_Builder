const Engineer = require('../lib/Engineer');

test('creates an Engineer', () => {
  const engineer = new Engineer('John', '02', 'example@example.com');

  expect(engineer.name).toBe('John');
  expect(engineer.employeeID).toBe('02');
  expect(engineer.emailAddress).toBe('example@example.com');
})

test('adds github name and link', () => {
  const engineer = new Engineer('John', '02', 'example@example.com');
  engineer.addGithub('exampleGit')

  expect(engineer.ghUserName).toBe('exampleGit');
  expect(engineer.ghLink).toBe('https://github.com/exampleGit');
})