// JavaScript Object
let employee = {
  firstName: "David",
  lastName: "Tucker",
  birthdate: new Date("January 1, 1982"),
  numYearsEmployment: 7,
  department: "Engineering",
  title: "CTO",
  isActive: true,
  salary: 100000
};

// Convert to JSON string
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);

// Re-stringify
jsonValue=JSON.stringify(employee, null, 2);
console.log(jsonValue);

// Convert Value Back to object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

// Writing JSON directly
let jsonString = `{
  "firstName": "Bobo",
  "lastName": "Pi"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improperly formatted JSON
//let notJSON = "hello!";
//let newobj = JSON.parse(notJSON);