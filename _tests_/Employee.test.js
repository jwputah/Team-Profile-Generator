const Employee = require("../lib/Employee");

test('Should create an object with an id name and email', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(emplyee.email).toEqual(email);
});

