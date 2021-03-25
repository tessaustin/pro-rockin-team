const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('role of employee', () => {
    const manager = new Manager('Dave');

    expect(manager.getRole()).toEqual("Manager");
});