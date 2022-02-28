
const Intern = require('../lib/intern')

test('Should create an object with an id and name', () => {
    const intern = new Intern(543, 'joe');

    expect(intern.id).toEqual(543);
    expect(intern.name).toEqual('joe');
});