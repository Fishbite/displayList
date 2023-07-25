// ****** map, filter, reduce START ******

/* ****** The `displayList` Function START ******

Use this function to write to an HTML container.
It is designed to be used along side functions that return
an array of objects like below:

Example: a function returns an object:
Object { Electronics: (4) […], Clothes: (4) […], Arses: (1) […] }​

`Object` contains arrays of other objects:
Arses: Array [ {…} ]​
Clothes: Array(4) [ {…}, {…}, {…}, … ]​
Electronics: Array(4) [ {…}, {…}, {…}, … ]

The Arrays within `Object` contain mmore objects!:
Arses: Array [ {…} ]
0: Object { name: "Product 9", price: 90, category: "Arses" }

Clothes: Array(4) [ {…}, {…}, {…}, … ]
0: Object { name: "Product 2", price: 30, category: "Clothes" }​​
1: Object { name: "Product 4", price: 40, category: "Clothes" }​​
2: Object { name: "Product 5", price: 50, category: "Clothes" }​​
3: Object { name: "Product 7", price: 80, category: "Clothes" }

Electronics: Array(4) [ {…}, {…}, {…}, … ]
0: Object { name: "Product 1", price: 20, category: "Electronics" }​
1: Object { name: "Product 3", price: 40, category: "Electronics" }​
2: Object { name: "Product 6", price: 70, category: "Electronics" }​
3: Object { name: "Product 8", price: 90, category: "Electronics" }

    The `displayList` function takes an argument list:
    input: array of objects
    HTMLContainerID: DOM element to write the data to
    prefix: a string to prefix the displayed data
    prop1: property name to extract the value from
    prop2: property name to extract the value (a number) from
*/
function displayList(input, HTMLContainerID, prefix, prop1, prop2) {
  // get the html element to use for the output
  const container = document.getElementById(HTMLContainerID);
  console.log(container);

  // create an unordered list
  const resultList = document.createElement("ul");

  // iterate over the input, which is an array of objects
  // returned by a function
  // Use a `for of` loop for large data sets instead of `forEach`
  input.forEach((obj) => {
    // create an empty list element
    const listItem = document.createElement("li");

    // Extract the property values based on the provided property names
    const value1 = obj[prop1];
    const value2 = obj[prop2].toFixed();

    // use the first two elements of the object to create the list text content
    listItem.textContent = `${prefix} ${value1}: ${value2}`;

    // append the list item to the result list
    resultList.appendChild(listItem);
  });

  // finally, append the result list to the HTML container
  return container.appendChild(resultList);
}

// ****** The `displayList` Function END ******

// Example usage of the `displayList` function START ******
/*
    calculate the average salary for each department and then 
    return an array of objects containing only the departments that 
    have an average salary above 65000:

    [
  { department: 'HR', average: 71666 }
]
*/
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

function getDepartments(arr, target) {
  const departments = arr.reduce((acc, employee) => {
    const dept = employee.department;

    if (!acc[dept]) {
      acc[dept] = [];
    }

    acc[dept].push(employee);

    return acc; // IMPORTANT to include this!!!
  }, {}); // IMPORTANT to provide initial value:- {} :-P

  const avgSalaryByDepartment = Object.keys(departments).map((department) => {
    const sum = departments[department].reduce(
      (acc, employee) => acc + employee.salary,
      0
    );

    return {
      department: department,
      avg: sum / departments[department].length,
    };
  });

  const result = avgSalaryByDepartment.filter(
    (department) => department.avg > target
  );

  return result;
}

const depts = getDepartments(employees, 55000);

/* ****** The `displayList` Function ******
    argument list:
    input: array of objects
    HTMLContainerID: DOM element to write the data to
    prefix: a string to prefix the displayed data
    prop1: property name to extract the value from
    prop2: property name to extract the value (a number) from
*/
displayList(depts, "avgSalaries", "Dept:", "department", "avg");

/*
    use map, filter, and reduce to calculate the average price of 
    products in each category, and then return an array of objects 
    containing only the categories that have an average price above 
    50.
*/
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 40, category: "Clothes" },
  { name: "Product 5", price: 50, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  { name: "Product 9", price: 90, category: "Arses" },
];

function getAvgPricedOver50(arr) {
  // iterate over each object in the products array (i.e each product)
  const productsByCategory = arr.reduce((acc, product) => {
    // Object { name: "Product 1", price: 20, category: "Electronics" }
    const category = product.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);

    // console.log(acc);
    return acc; // Object { Electronics: (4) […], Clothes: (4) […] }
  }, {});

  const avgPriceByCategory = Object.keys(productsByCategory).map((category) => {
    const sum = productsByCategory[category].reduce(
      (acc, product) => acc + product.price,
      0
    );

    return {
      category: category,
      avg: sum / productsByCategory[category].length,
    };
  });

  return avgPriceByCategory.filter((category) => category.avg > 0);
}

const avgProdPrices = getAvgPricedOver50(products);
displayList(avgProdPrices, "productCats", "category:", "category", "avg");

/*
    use map, filter, and reduce to calculate the average test score for each 
    student, and then return an array of objects containing only the 
    students who have an average score above `target`
*/
const studentsScores = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
];
function filterStudentScores(studentsScores, target) {
  const getStudents = studentsScores
    .map((student) => {
      // map iterates over the input array which separates each
      // object in the array:
      // console.log(student); // { name: "Alice", scores: [90, 85, 92] }

      // console.log(student.scores);
      // reduce iterates over the scores to give the sum of values
      const sum = student.scores.reduce((acc, score) => acc + score);

      // return an object with students name and average score
      return { name: student.name, average: sum / student.scores.length };
    })
    .filter((student) => {
      return student.average >= target;
    });

  return getStudents;
}

const studentResults = filterStudentScores(studentsScores, 50);
displayList(studentResults, "studentScores", "Student:", "name", "average");

// Example usage of the `displayList` function END ******
