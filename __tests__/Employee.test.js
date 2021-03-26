//const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('employee object', () => {
    const employee = new Employee('Dave', '20', 'hey@guy.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('20');
    expect(employee.email).toBe('hey@guy.com');
});

test('employee name', () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('employee ID', () => {
    const employee = new Employee('Dave', '20');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('employee email', () => {
    const employee = new Employee('Dave', '20', 'hey@guy.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('role of employee', () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toEqual("Employee");
});
