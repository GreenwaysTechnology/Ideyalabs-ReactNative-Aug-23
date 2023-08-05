
function sayHello() {
    return 'Hello'
}
//invoke 
sayHello()
/////////////////////////////////////////////////////

//function can be stored into variable

let hello = sayHello
console.log(hello)
//once the function is stored into variable ,we can invoke
console.log(hello())

//function is declared in the same line 

//function without name : anonmous function 
let add = function (a = 0, b = 0) {
    //logic 
    console.log('add')
    return a + b
}
console.log(add(10, 34))
