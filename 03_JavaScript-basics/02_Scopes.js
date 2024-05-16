// / *******SCOPE'S*******************

// let a = 10;

// var b = 20;

// const cc = 30

// console.table(a)
// console.table(b)
// console.table(cc)

var b = 100;

if (true) {  // Scope 
   let a = 10;
   var b = 20;  // var is Global Scope 
   const cc = 30;
}

// console.table(a)  // script.js:237 Uncaught ReferenceError: a is not defined
console.table(b)  // 20
console.table(cc)  //  Uncaught ReferenceError: cc is not defined
