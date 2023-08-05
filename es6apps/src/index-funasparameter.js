
//a=10,b=10
//a=x,b=y
function add(a, b) {

}
add(10, 10)

let x = 20
let y = 20
add(x, y)


function sayGreet(hello) {
    hello()
}
let greet = function () {
    console.log('greet')
}
sayGreet(greet)

sayGreet(function () {
    console.log('Hello')
})
////////////////////////////////////////////////////

function login(resolve, reject) {
    let isLoggedIn = false
    if (isLoggedIn) {
        resolve('Login success')
    } else {
        reject('Login failed')
    }

}
login(function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})
















