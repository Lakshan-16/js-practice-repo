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
// let n=10;
// let i=n;
// for(i;--n;i+=n);
// console.log("sum:",i);


// -----------------------------------------------------
// for-of loop , iterate over arrays and strings , it helps 
// let str = "Lakshan";
// for(let i of str) {
//     console.log("i=",i);

// }

// let size =0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log(size);


// ----------------------------------------------------------
// for in loop is used for iteration on Objects 
// for(let key in objVar){

// }


// const student ={

//     name : "Lakshan", 
//     age :22,
//     course :"ECE"

// };

// for(let key in student){
//     console.log("keys =",key,"value=",student[key]);  // here student["key "] or student.key wont work , becuase the 'key' is not actual the key address . here key is a index variable 
// }

// even numbers form 0 to 100

// for(let i=0;i<=100 ;i+=2){
//     console.log(i);
// }

// using while loop 
// let i=0;
// while (i<=100){
//     console.log(i);
//     i+=2;
// }

// do -while loop 
// let i=0;

// do{
//      console.log(i);
//     i+=2;
// } while(i<=100);

// guess the number 

// let gameNum =25;

// let userNo = prompt("guess a number");
// while(gameNum != userNo){
//     console.log("try again");
//     userNo = prompt("guess a number");
// }
// console.log("you guessed it right");

// String in js 
// let str="Lakshan"; // '' can also be used

//  in-built property or internal variable 
// 1. length //str.length

// Templet leterals 
// let specialString = `this is a templet leteral`;
// console.log(specialString);


// const student ={
//     name : "Lakshan", 
//     age :22,
//     course :"ECE"
    
// };

// console.log("name:",student.name,"age:",student.age,"course:",student.course);
// console.log(" OR ");
// console.log(`Name: ${student.name} age: ${student.age} course ${student.course}`);

// ESCAPE CHARECTER 
// \n new line
// \t tab space

// console.log("hello \n world");

// the escape charecter \n or \t are considerd as single charecter of lenth 1 ;

//String methods 

// str.toUpperCase() , str.toLowerCase() , str.trim() // removes whitespaces 

// let s = "Lakshan" ;
// console.log(s);
// console.log(s.toUpperCase());

// strings are immutable in JS similar to JAVA

// trims strating and ending white spaces in a string 

// let s= "    hello     world       ";
// console.log(s.trim());


//str.slice(start ,end); // returns part of a string // the end index is non inclusive 
// str.slice(strat) ; this also works 

// let str ="Lakshan";
// console.log(str.slice(3,6)); // prints sha


// // concatinate  using method 
// let str1="hello";
// let str2="world";
// let str3=str1.concat(str2);
// console.log(str3);
// // concatinate using +
// let str4 = str1 +str2;
// console.log(str4);

// str.replace(searchVal, newVal);

// let str = "hello";
// console.log(str.replace("h","y"));
// console.log(str.replace("lo","p"));

// str.replaceAll (serachValue,newVal);
// let s ="Lakshan";
// console.log(s.charAt(0));   

// // problem Prompt the user to enter their full name. Generate a username for them based on the input 
// // Start username with @, followed by their full name and ending with the fullname length

// let user = prompt("enter your name ");
// let username = `@${user}${user.length}`;
// console.log(username);


// let names =["alia","thania","saloni","neha"];
// let mix =[400,"delisha ", "ashlie",832];
// for(let i =0;i<names.length;i++){
//     console.log(names[i]);
// }
// for(let ele of names){
//     console.log(ele);
// }

// for(let ele in names){
//     console.log(names[ele]);
// }

// let marks =[89 ,99 ,80,100];

// for(let i =1;i<marks.length;i++){
//     marks[0]+=marks[i];
// }
// let avg = marks[0]/marks.length;
// console.log(avg);

// Array methods 
// Arrays are mutable 
// some methods return new array 
// some methods modify the same 
// 1.push 
// 1.pop 

// exaple 
let veg =["carrot","tomato","onion","potato","dragon fruit"];
console.log(veg);
// if we want to push element to the end 
veg.push("papaya");
console.log(veg);
// if we want to pop element form the end 
veg .pop(); // this will pop papaya 
console.log(veg);

// push multiple items 
veg.push("apple", "orange","banana");
console.log(veg);

// toString method converts array to string 
console.log(veg.toString());
// concat() joins multiple arrays and returns the combined arry and does no changes in the actual array 

let marvel= ["iron man", "spider man" ," thor", " captian america" ];
let dc =["super man","bat man","shazam ","Aqua man"];
console.log(marvel);
console.log(dc);
console.log(marvel.concat(dc));

// unshift() similar to push but addes element in starting 
marvel.unshift("Ant man")
console.log(marvel);

// shift() this is similar to pop but deletes element from 
console.log(" deleted", dc.shift());
console.log(" new dc arrya is ",dc);
