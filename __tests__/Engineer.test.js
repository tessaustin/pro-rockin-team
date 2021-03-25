const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.github).toEqual(expect.any(String));
});

test('engineer github', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('role of employee', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getRole()).toEqual("Engineer");
});