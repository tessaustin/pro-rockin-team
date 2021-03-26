//const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('intern object', () => {
    const intern = new Intern('Dave');

    expect(intern.school).toEqual(expect.any(String));
});

test('intern school', () => {
    const intern = new Intern('Dave');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('role of employee', () => {
    const intern = new Intern('Dave');

    expect(intern.getRole()).toEqual('Intern');
})