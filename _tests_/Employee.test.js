const Employee = require("../lib/employee");

test('Should create an object with an id name and email', () => {
    const employee = new Employee(789, 'john', 'email');

    expect(employee.id).toEqual(789);
    expect(employee.name).toEqual('john');
    expect(employee.email).toEqual('email');
});

