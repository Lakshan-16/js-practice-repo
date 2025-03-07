console.log("Lakshan , we welcome you to the world of JS ");
console.log("Stay tuned and be exited to learn and explore the beauty of JS");
name="Lakshan";
console.log(name);
age=22;
height="5'11";
// null means empty , its a special value
// null means we know that this variable is empty  
x=null;
// undefined and null are not same 
// undefined means we dont know what is inside this variable
y=undefined;
sex="male";
// boolean type , we have to values true or false 
good=true;
bad=false;
// js is dynamically typed language
// that is if tommorow my mood says i want to store 22 in name . and js allows it . but languages like java ,c ,c++ wont allow it 
// = is the assignment operator in js 
// rules for varibales:
// case sensitive 

// always use : let,cont or var keywords for defining or declaring a variable , dont directly declare variable , it is bad practice 
// in olden days we used var keyword in js , upto 2015
// in 2015 we got ES6 , that is we got new keywords let and const
//var num=22;
// var num=44;
// var num=55;
// console.log(num)
// prints 55 
// let n=1;
// let n=2;
// redeclarion is not allowed in let 
// but we can chage the value there it self , so multiple copy of the variable is not allowed 
// and also this is allowed 
// let age=100;
// age=99;
// age=90;
// age=22;
// -----------------------
// const age=22;
// age=99; 
// this will throw error :assigned two contant variables 
let fullName="Lakshan";
let age=22;
let gender="male";

// by default the value of the variable decalred in java is undefined 
// let number;
// but wont work for const , so always initalize the const variable 

// Global scope variable : we have var

// Block scope variable : let and const .. a block is between {} braces 
// {
    // let a=10;
    // console.log(a);
// }
// {
    // let a=9;
    // console.log(a);
// }
// this is allowed and it shows the significace of block variable 

// js has 2 differnt data types 
// 1. premitive and 
// 2. non premitive 
// 7 diffent data types in primitive 
// Number, String, Boolean, Undefined,Null,BigInt,Symbol



// example:
let age=22;
// typeof(age); used for seeing type of age variable 
let name="Lakshan";
// typeof(name); used for seeing type of age variable 
let value=true;
// typeof(value); used for seeing type of age variable 
let x;
// typeof(x); used for seeing type of age variable 
let num=BigInt(13222    );
// typeof(age); used for seeing type of age variable 
let y=Symbol("Hello");
// typeof(age); used for seeing type of age variable 


// under non - primitive we have objects ,and the sub catagory of objects we have some of them as Arrays and some of them as functions

// objects-> collection of values in js , contains values of differnt types together in an object type variable 
// {key : value} , pair we have in objects in general
// we use 'const' for creating objects in general 
const student ={
    fullName:"Lakshan";
    age:22;
    branch:"ECE";
};

console.log(student);
typeof(student); // its output is object 

// access fullName from the student object 
student["fullName"];// this will print Lakshan

//  other method ... since the object is key-value pair 
//  we know we have 2 methods to access keys in general 
console.log(student.age);  // this will print 22
console.log(student["age"]); //this will print 22

// how to update and do operation on objects 

student.age=student.age+1;
student.branch="CSE";

// if we do normal variable as const then we cannot modify the initally decared value of the const variable 
// but the question is why we able to chage the values of the keys of the objects 
// it is because the keys are not const , the object is const . so we actually modify the value of the keys so that is the reason that there is no error when we update 
// the values of the keys of an const object 
// but we will get error when we update the address of the object (that is we must try to change the collection itself ,since objects are collections of key value pairs) which is const ,and that we will learn later 
// so when it means modifying the const object , it means that we are trying to chage the collections itself with other collection then it will give error 

