//const { test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toEqual('Dave');
});

test('role of employee', () => {
    const manager = new Manager('Dave, 20, dave@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
});