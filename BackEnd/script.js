let arg = process.argv;

for(let i =2;i<arg.length;i++){
    console.log("Hello to ",arg[i]);
}
//console.log(process.argv);

// let obj = require("./math.js");
// console.log(obj.sum(2,4));

let info = require("./Fruit");

console.log(info);