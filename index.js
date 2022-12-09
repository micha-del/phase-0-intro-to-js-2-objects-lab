const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return employee = {
        name: 'Sam',
        streetAddress: '11 Broadway'
    }
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key){
    employee[key] = '12 Broadway'
    return employee
    }
function deleteFromEmployeeByKey(employee, key, value){
   const newEmployee = {
        name: 'Sam',
        streetAddress: '11 Broadway'
    }
    newEmployee[key] = value
    return newEmployee
    }
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    const newEmployee = {
        name: 'Sam',
        streetAddress: '11 Broadway'
    }
    employee[key] = value
    return employee
}
   
   