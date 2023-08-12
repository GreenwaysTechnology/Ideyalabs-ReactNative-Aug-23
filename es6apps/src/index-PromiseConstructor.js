
function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 5000, 'Login success')
        } else {
            setTimeout(reject, 5000, 'Login failed')
        }
    })
}

//console.log(getValue())
blockMe('start')
login('foo', 'admin').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
blockMe('end')
