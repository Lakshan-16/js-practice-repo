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

// // exaple 
// let veg =["carrot","tomato","onion","potato","dragon fruit"];
// console.log(veg);
// // if we want to push element to the end 
// veg.push("papaya");
// console.log(veg);
// // if we want to pop element form the end 
// veg .pop(); // this will pop papaya 
// console.log(veg);

// // push multiple items 
// veg.push("apple", "orange","banana");
// console.log(veg);

// // toString method converts array to string 
// console.log(veg.toString());
// // concat() joins multiple arrays and returns the combined arry and does no changes in the actual array 

// let marvel= ["iron man", "spider man" ," thor", " captian america" ];
// let dc =["super man","bat man","shazam ","Aqua man"];
// console.log(marvel);
// console.log(dc);
// console.log(marvel.concat(dc));

// // unshift() similar to push but addes element in starting 
// marvel.unshift("Ant man")
// console.log(marvel);

// // shift() this is similar to pop but deletes element from 
// console.log(" deleted", dc.shift());
// console.log(" new dc arrya is ",dc);

// //  slice() method is similar to that in strings // used for slicing the part of array // end index is non - inclusive 
// // will not modify original arry 
// console.log(marvel.slice(1,4));

// // splice() method // modifies the original array // to remove // to add // to modify the original array
// // splice (start index, delete count , new element );// the new elemtent if we add , its added to the start index
// // if we dont want to delete anyting then delete count =0 // this will add new element in the start index you choose 
// marvel.splice(2,0,"doctor strange"); // add element at 2
// console.log(marvel);
// marvel.splice(2,3,"hulk"); //add element at 2 and delete 3 elements after 2 
// console.log(marvel);
// marvel.splice(2,1,"falcon");// relace the element at 2 with new element 

// function sum(a,b){
//     console.log(a+b);
// }
// sum(19,99);

// function add(a,b){
//     return a+b;
// }
// console.log(add(19,99));

// Arrow fuctions  in modern JS
// (a,b) => {
//     console.log(a+b);
// }

// const arrowSum = (a,b) => {
//     console.log(a+b);
// }

// console.log(arrowSum); // prints the body
// console.log(arrowSum(4443,283));

// let arrowMul =( a, b)=>{
//     return a*b;
// }

// console.log(arrowMul);
// console.log(arrowMul(39,282));
// // ---------------------------------------------------------------------
// function vovels(str){
//     let count =0;
//     let vov = "aeiou";
//     let count =0;
// for ( let c of str){
//     if(c==="a"||c==="e"||c==="i"||c==="o"||c==="u"){
//         count++;
//     }
// }
// return count;
// }


// let str ="Lakshan";
// console.log(`number of vovels in ${str} is ${vovels(str)}`);
// // ----------------------------------------------------------

// const arrowVovel = (str) =>{

// let count =0;
// for ( let c of str){
//     if(c==="a"||c==="e"||c==="i"||c==="o"||c==="u"){
//         count++;
//     }
// }
// return count;
// }
// let str = "Lakshan";
// console.log(`in ${str} we have ${arrowVovel(str)} number of vovels`);

// arr.forEach(callbackfunciton ) // this is a method used for arrays  

// function abc(){
//     console.log("hello");
// }

// function myFunc(abc){

//     return abc;

// }


// // callback is afunction that has been passed as an argument to another function 
// the body of the function is being passed as an parameter ot the forEach function 


// let arr =[38,93,33,1,54,8];
// arr.forEach(function printVal(val){//here val is value at each index
//     console.log(val);

// });

//  generally inside callback function we pass ArrowFunciton as the parameter 

// let arr =["pune","bangalore","mangalore","mumbai","delhi"];
// arr.forEach((val, i,arr) =>{   // by default in forEach funciton we have 3 parameters , value , index and the ' array-it-self '
//     console.log(val.toUpperCase(),i,arr); 
// })

// HIGHER ORDER FUCITON  = are those funciton which take other funtion as its parameter or it is returning other funtion 

// arr.forEach() method in JS is a higher order funtion and also an higher order method 
//  practice :
// . For a given array of numbers, print the square of each value using the forEach loop.

// let arr =[1,2,3,4,5,6,7];
// //forEach method performs a perticualar set of operations for each elements in the array 
// arr.forEach((num) => {
//     console.log(num**2);
// });

// arr.map() its a callback function

// let arr =[1,2,3,4,5,6,7];
// arr.map((val)=>{
//     console.log(val);
// });

// let newArr = arr.map(( val)=>{
//     return val**2;
// })
// console.log(newArr);

// arr.filter() it is a funtion used for filtering the array upon some condition 
// the new array contains a filtered elements 

// let arr =[1,2,3,4,5,6,7];
// let evenArr = arr.filter((num)=>{
//     return num%2===0;  // if the condition is true then it returns true to the filter () and then it will include that element in the new array
// });
// console.log(evenArr);


// arr.reduce(); this is a callback method which takes funtion as input and gives array elements as input to that funtion 
//and then performs some operation and reduces the array to a single value , and then returns the single value 
// let arr =[1,2,3,4,5,6,7];
// let output = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// let num =[1,2,3,4,5,6,7];
// let large = num.reduce((prev,curr)=>{
//     return prev>curr ? prev:curr;
// });
// console.log(large);

// We are given array of marks of students. Filter our of the marks of students that scored 90+

// let marks =[ 99,28,22,100,93,84,23,84,88,74,60,90,89,98,100];
// let highScore = marks.filter((ele)=>{
//     return ele>90;
// });
// console.log(marks);
// console.log(highScore);

// Take a number n as input from user. Create an array of numbers from 1 to n
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

// let num =prompt("user enter a number ");
// let arr =[];
// for(let i=0;i<num;i++){
//     arr[i]=i+1;
// }
// let sum = arr.reduce((prev,curr)=>{
//     return prev+curr;
// });

// let pro = arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(`sum =${sum} and product =${pro}`);
