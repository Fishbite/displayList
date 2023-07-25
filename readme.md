# displayList Function

The `displayList` function is a utility function that takes an array of objects and displays the specified property values in an HTML element. It provides a convenient way to present data on a web page, especially when working with arrays of objects returned by other functions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Parameters](#parameters)
- [Examples](#examples)

## Installation

No installation is required as this is a standalone JavaScript function that can be included directly in your project.

## Usage

To use the `displayList` function, simply copy the code into your JavaScript file or include it in your HTML file. You can then call the function with the appropriate arguments to display your data.

```javascript
// Example usage:
const employees = [
  // ... (array of employee objects)
];

const targetSalary = 55000;
const depts = getDepartments(employees, targetSalary);

// Call the displayList function to display the departments and average salaries
// Parameters: input, HTMLContainerID, prefix, prop1, prop2
displayList(depts, "result-container", "Department:", "department", "avg");
```

## Parameters

The `displayList` function takes the following parameters:

1. `input` (array of objects): The array of objects that contains the data to be displayed.

2. `HTMLContainerID` (string): The ID of the HTML container element where the data will be displayed. Make sure the container with this ID exists in your HTML file.

3. `prefix` (string): A string to be used as a prefix for each set of data. It helps provide context for the displayed information.

4. `prop1` (string): The name of the property in each object from the `input` array that you want to display as the first value.

5. `prop2` (string): The name of the property in each object from the `input` array that you want to display as the second value.

## Examples

Assuming you have an array of employee objects like the one below:

```javascript
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  // ... (more employee objects)
];
```

You can use the `displayList` function to display the department and average salary for departments with average salaries greater than a target value:

```javascript
const targetSalary = 55000;
const depts = getDepartments(employees, targetSalary);

displayList(depts, "result-container", "Department:", "department", "avg");
```

This will render the following output in the HTML container with the ID "result-container":

- Department: IT, Average Salary: 57500
- Department: HR, Average Salary: 71666

---
