const Employee = require('../lib/Employee');

test('creates an employee', () => {
  const employee = new Employee('John', '02', 'example@example.com');

  expect(employee.name).toBe('John');
  expect(employee.employeeID).toBe('02');
  expect(employee.emailAddress).toBe('example@example.com');
})