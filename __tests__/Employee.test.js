const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets emplyee's name", () => {
    const employee = new Employee
})