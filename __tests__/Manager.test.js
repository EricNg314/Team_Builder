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