const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
//let updatedEmployees = {}
console.log(employees);
function newEmployees(employees) { //beginning of function
 let updatedEmployeeList = [];
  // beginning of for loop
  for (let employee of employees) {
    //begginning of new object
    updatedEmployee = {
      name: '',
      bonusPercentage: 0,
      totalCompensation: 0,
      totalBonus: 0,
    } // end of new object

    // beginning of early raise if else statement
    if (employee.reviewRating <= 2 ) {
      updatedEmployee.totalCompensation = employee.annualSalary * 1.00;
      updatedEmployee.bonusPercentage += 0
    } else if (employee.reviewRating === 3){
      updatedEmployee.totalCompensation = employee.annualSalary * 1.04; 
      updatedEmployee.bonusPercentage += 4
    } else if (employee.reviewRating === 4) {
      updatedEmployee.totalCompensation = employee.annualSalary * 1.06;
      updatedEmployee.bonusPercentage += 6
    } else {
      updatedEmployee.totalCompensation = employee.annualSalary * 1.10;
      updatedEmployee.bonusPercentage += 10
    } // end of yearly raise if else statement
      // beginning of 15 year compensation if statement
    if (employee.employeeNumber < 9999) {
      updatedEmployee.totalCompensation += updatedEmployee.annualSalary * 1.05;
      updatedEmployee.bonusPercentage += 5
    } //end of second 15 year compensation if statement
//updatedEmployeeList.push(employee.annualSalary)
    updatedEmployee.totalBonus = updatedEmployee.totalCompensation - employee.annualSalary; 
    updatedEmployee.name = employee.name;
    console.log(updatedEmployee);
    } // end of for loop
    return updatedEmployeeList;
  } //end of function
  
console.log(newEmployees(employees));
console.log(employees);
