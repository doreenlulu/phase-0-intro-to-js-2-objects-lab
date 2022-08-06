const employee = {
    name: "",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = {...employee};
    employee2[key] = value;
    return employee2;
}
function destructivelyUpdatedEmployeeWithKeyValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}
function deleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, employee2, key) {
    delete employee2[key];
    return employee;
}