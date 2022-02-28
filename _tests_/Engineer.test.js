const Engineer = require('../lib/engineer')

test('Should create an object with an id and name', () => {
    const engineer = new Engineer(567, 'larry');

    expect(engineer.id).toEqual(567);
    expect(engineer.name).toEqual('larry');
});