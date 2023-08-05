
//es 5 function declaration

let hello = function () {
    console.log('hello')
}
hello()
//es 6 arrow function 
let hai = () => {
    console.log('hello')
}
hai()
//if function has only one line of body we can remove {}
hai = () => console.log('hello')
hai()

//args and parameters
let add = (a = 10, b = 20) => {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
//if function returns
add = (a = 10, b = 20) => {
    return a + b;
}
console.log(`c ${add(10, 10)}`)

//if function only returns , we can remove return statement and {}
add = (a = 10, b = 20) => a + b;
console.log(`c ${add(10, 10)}`)
