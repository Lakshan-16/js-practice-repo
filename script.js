// console.log("hello world");
// // operators in js
// let a=5;
// let b=2;
// console.log("a=",a,"b=",b);
// console.log("a+b=",a+b);
// console.log("a/b=",a/b);
// console.log("a*b=",a*b);
// console.log("a%b=",a%b);
// console.log("a^b=",a**b);
// // unary 
// console.log("a++=",a++);
// console.log("a--=",a--);
// console.log("-----------------------");
// console.log("a=",a,"b=",b);
// a=a+2;
// b=b+2;
// console.log("a=a+2 b=b+2");
// console.log("a=",a,"b=",b);
// console.log("++a=",++a);
// console.log("--b=",--b);
// console.log("a=",a,"b=",b);
// assignment operators 
// let a =5;
// let b = 4;

// a+=4;
// console.log("a=",a);


// b-=4;
// console.log("b=",b);

// let a=5;
// let b=2;
// console.log("a==b",a==b); // returns true or false
// console.log("a!=b",a!=b); // returns true or false
// let a=5;
// let b="5";
// console.log("a===b",a===b);
// console.log("a!==b",a!==b);

// let a=5;
// let b=3;
// console.log("a<b",a<b);
// console.log("a<=b",a<=b);
// console.log("a>b",a>b);
// console.log("a>=b",a>=b);

// logical operators
// answer is true or false 
// let a=5;
// let b=3;

// let condition1=a>b;
// let condition2 = a===5 ;
// console.log(condition1 && condition2);
// ------------------------------------------------
// conditional statements in js 
// 3 types 
// let color ;

// if(mode=="dark-mode"){
//     color = "black";
// }

// let age = 25;
// if (age >= 18 ){
// //     console.log("you can vote ");
// // }

// let mode = "dark";
// if(mode ==="dark"){
//     color ="black";
// } else{
//     color = "white";
// }
// console.log(color);


// ternary operator in js 

// let age =22;

// console.log(age>=18 ? "adult":"not adult");

// let age =22;
// let result = age>=18 ? "adult":"not adult";
// console.log(result);

// 2. switch 

// const exp = "papaya";
// switch(exp){
//     case "orange":
//         console.log("orages are expensive");
//         break;
//     case "mango":
//         console.log("mango is less expensive than orange ");
//         break;
//     case "papaya":
//         console.log("papaya is the cheapest");
//         break;
//     default:
//         console.log("sorry, we dont have that fruit");
// }

// ---------------------------------------------------------------------------
// alert("user please enter a number "); // alert message 
// prompt("user please enter a number");// pop up with a input checkbox 

// let num = prompt("user please enter a number");
// let result = num%5 === 0 ? console.log( num+" is divisible by 5"):console.log( num+" is not divisible by 5");


// ----------------------------------------------------------------------------------
// Grade system 
// 80-100 A
// 70-79 B
// 60-69 C
// 50-59 D
// 0-49 F

// let marks = prompt("enter the marks");
// if(marks <= 100 && marks >=80){
//     console.log("A");
// }else if(marks <= 79 && marks >=70){
//     console.log("B");
// }else if(marks <= 69 && marks >=60){
//     console.log("C");
// }else if(marks <= 59 && marks >=50){
//     console.log("D");
// }else if(marks <= 49 && marks >=0){
//     console.log("F");
// }else
//     console.log("enter a valid marks");


// Chapter 3: LOOPS IN JS

// for(let i=0;i<4;i++){
//     console.log("Lakshan");
// }

// sum of n natural numbers using loops 

// let n =10;
// for(let i=1;i<n;i++){
//     n=n+i;
// }
// console.log("sum =",n);

// let n=10;
// console.log("sum =",n*(n+1)/2);

// let n=100;
// let sum =0;

// let n = parseInt(prompt("Enter a number:"));

// for (let i = n; --n; i += n);

// console.log("Sum of first", n, "natural numbers is:", i);
let n=10;
let i=n;
for(i;--n;i+=n);
console.log("sum:",i);