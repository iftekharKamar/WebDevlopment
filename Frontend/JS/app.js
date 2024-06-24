// let max = prompt("Enter the max number");
// const rand = Math.floor(Math.random()*max)+1;
// let guess = prompt("guess the number")
// console.log(rand);

// while(true){
    
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }else if(guess==rand){
//         console.log("you are right: congrats!")
//         break;
//     }
// else{
//     guess = prompt("the given number is wrong");
// }
// }

// functions
//  function hello(){
//      console.log("hello");
//  }

// function rollDice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }

//function with arguments
// function printName(name,age){
// console.log(`${name} age is ${age}`);
// }

//average of three numbers

// function calcAvg(a,b,c){
//     let avg =(a+b+c)/3
//     console.log(avg);
// }

//multiplication table of number

// function printTable(n){
//     for(let i =1;i<=10;i++){
//     console.log(n*i);
//     }
// }

// function isAdult(age){
//     if(age>=18){
//         return "Adult";
//     }else{
//         return "not Adult";
//     }
// }
//sum of number from 1 to n

function getSum(n){
    let sum =0;
    for(let i =1;i<=n;i++){
        sum +=i;
    }
    return sum;
}

// Scope

let greet = "hello";

// function printGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function inner(){
//         console.log(greet);
//     }
//     inner();
// }
// console.log(greet);
// printGreet();

//function expression

const sum = function(a,b){
    return a+b;
}
// sum(2,3);

//Method
// const calculator ={
//     num :55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a+b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };

// function largest(arr,n){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]>n){
//             console.log(arr[i])
//             break;
//         }
//     }
// }

let arr =[2,4,6,8];
// largest(arr,3);


//this keyword

// const student ={
//     name:"Iftekhar",
//     age:23,
//     eng:95,
//     math:93,
//     phy:97,
//     getAvg(){
//         let avg = (this.eng + this.math+this.phy)/3;
//         console.log(avg);
//     }

// }

//try & catc
// console.log("hello");
// console.log("hello");
// console.log("hello");
// try{
//     console.log(a);   
// }catch(err){
//     console.log("variable a doesn't exist");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");

//Arrow functioncons
for(let i =0;i<20;i++){
console.log(Math.floor(Math.random()*4));
}