//const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.name).toEqual('Dave');
});

test('engineer github', () => {
    const engineer = new Engineer('Dave', '0000', 'hey@guy.com', 'Davedoe');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('role of employee', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getRole()).toEqual("Engineer");
});