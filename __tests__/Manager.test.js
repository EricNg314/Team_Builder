const Manager = require('../lib/Manager');

test('creates an Manager', () => {
  const manager = new Manager('John', '02', 'example@example.com');

  expect(manager.name).toBe('John');
  expect(manager.employeeID).toBe('02');
  expect(manager.emailAddress).toBe('example@example.com');
})

test('adds office number to Manager', () => {
  const manager = new Manager('John', '02', 'example@example.com');
  manager.addOfficeNumber('10')
  
  expect(manager.officeNumber).toBe('10');
})

test('retrieve HTML string from Manager', () => {
  const manager = new Manager('John', '02', 'example@example.com');
  manager.addOfficeNumber('10')
  
  const returnedHtml = manager.returnHtml();

  expect(returnedHtml.includes('>John</h2>')).toBeTruthy();
  expect(returnedHtml.includes('>ID: 02</li>')).toBeTruthy();
  expect(returnedHtml.includes('>example@example.com</a>')).toBeTruthy();
  expect(returnedHtml.includes('>Office Number: 10</li>')).toBeTruthy();
})