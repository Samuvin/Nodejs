// const obj = require("./sum.js");
// const multiply = require("./multiply.js");
//calc_Sum(2, 2); // Not defined problem
//Throw error
//We cannot directly use calculate sum
//Modules by default protected their variables and functions from leaking
//To use that Function we have to export and import
const { calc_Sum, multiply } = require("./Calculate");
const data = require("./data.json");

console.log(data);
console.log(JSON.stringify(data));
var a = 10;
var b = 20;
calc_Sum(a, b);
multiply(a, b);
