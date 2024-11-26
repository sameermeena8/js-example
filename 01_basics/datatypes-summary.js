// Primitive data types 

// 7 types : Number, String, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 3582461819365817n


// Reference (Non primitive)
 
// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"soljier",
    age:22,
}

const myFunction = function() {
    console.log("hello Soljier");
}

console.log(typeof heros);


// ++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "soljierworld.com"

let anothername = myYoutubename
anothername = "lovememysoljier"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "uder@ybl" 
}

let userTwo = userOne

userTwo.email = "soljier@google.com"

console.log(userOne.email);
console.log(userTwo.email);















// javascript version 2024!
//                                           ||  javascript  ||

//           3 types of variables javascript
// 1.var
// 2.let
// 3.const

//            2 types of datatypes javascript

// Primitive Data Type & Non-Primitive Data Types

// 1.Number, 2.String, 3.Boolean, 4.Null, 5.Undefined, 6.Symbol, 7.BigInt, 8.NaN 

// 1.Object, 2.Arrays, 3.function