var name= 'shivendra';
 var name ='nisha'

alert(name);
// var a= prompt("What is you name ?")
// console.log(a);

// in js variables can holds different type of datatypes they can hold string, integer, functions, objects, arrays etc 
// we have two method to create variable 
        // const ---> value can not be changed i.e we can not assign different value to const like var
        // var -----> we can reassign the value of var again and again


const name1 = "shivendra"; 
// const name1 ="nisha" // not possible
alert(name1);   


// #Let kwyword 
// let keyword will not allow varible to be accessed outside of the scope 
// var can be used anywhere 

if (true)
{
    let name2 = 'Shivendra';
    alert(name2);
}
// alert(name2);    // it will throw an error that name2 is not defined since it is outside of scope(let is used )
                // if we will use var inside then it can be assessed anywhere 


// # Template string 
 let fname="shivendra";
let lname="Jha";
let age = prompt("guess shivendr's age ?")

/* let result = fname + " " + lname + " is " + age + " years old"

alert(result); 
 */


let result =` ${fname} ${lname} is ${age} years old `;
alert(result);