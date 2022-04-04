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

test('retrieve HTML string from Engineer', () => {
  const engineer = new Engineer('John', '02', 'example@example.com');
  engineer.addGithub('exampleGit')

  const returnedHtml = engineer.returnHtml();
  
  expect(returnedHtml.includes('>John</h2>')).toBeTruthy();
  expect(returnedHtml.includes('>ID: 02</li>')).toBeTruthy();
  expect(returnedHtml.includes('>example@example.com</a>')).toBeTruthy();
  expect(returnedHtml.includes('href="https://github.com/exampleGit" target="_blank">exampleGit</a></li>')).toBeTruthy();
})