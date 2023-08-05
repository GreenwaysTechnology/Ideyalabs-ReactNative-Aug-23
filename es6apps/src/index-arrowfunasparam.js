
// function sayGreet(hello) {
//     hello()
// }


let sayGreet = hello => hello()

let greet = () => console.log('greet')
sayGreet(greet)

sayGreet(() => {
    console.log('Hello')
})
sayGreet(() => console.log('Hello'))


const login = (resolve, reject) => {
    let isLoggedIn = false
    if (isLoggedIn) {
        resolve('Login success')
    } else {
        reject('Login failed')
    }

}
login(status => console.log(status), err => console.log(err))