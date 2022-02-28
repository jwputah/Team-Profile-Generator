const Manager = require('../lib/manager')

test('Should create an object with an id and name', () => {
    const manager = new Manager(999, 'sally');

    expect(manager.id).toEqual(999);
    expect(manager.name).toEqual('sally');
});