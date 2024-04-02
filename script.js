let firstName;
let lastName;
let salary;
let salariesArray = [];

let tbody = document.querySelector("tbody");



const employeeTable = document.getElementById("employee-table");

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  let firstNameCell = document.createElement("td");
  let lastNameCell = document.createElement("td");
  let salaryCell = document.createElement("td");

  const newRow = document.createElement("tr");
    // TODO: Get user input to create and return an array of employee objects
  firstName = prompt(`What is employees frist name?`);
  lastName = prompt(`What is employees last name?`);
  salary = prompt(`What is employees salary?`);

  salariesArray.push(salary)  // convert salary to a number  google: javascript string to number

  firstNameCell.textContent = firstName;
  lastNameCell.append(lastName);
  salaryCell.append(salary);

  //employeesArray.push(firstName, lastName, salary);
//  console.log(employeesArray);

  newRow.append(firstNameCell);
  newRow.append(lastNameCell);
  newRow.append(salaryCell);

  tbody.appendChild(newRow);
  console.log(tbody)
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
 //const /v Math.floor(Math.random() * )
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  collectEmployees();

  // console.table(employees);

  // displayAverageSalary(employees);

  console.log('==============================');

  // getRandomEmployee(employees);

  /*employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });*/

  // displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);