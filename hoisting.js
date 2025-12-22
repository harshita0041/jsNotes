//Hoisting
getname()
console.log(x)
console.log(getname)
var  x = 7;
function getname() {
  console.log("Namaste Javascript")
}

//Javascript runs in two phases 
1--> memory creation phase
2--> execution phase

In memory creation phase
var x = undefined;
function getname -->whole function will be Stored 

output
Namaste Javascript
undefined
ƒ getname() { ... }
