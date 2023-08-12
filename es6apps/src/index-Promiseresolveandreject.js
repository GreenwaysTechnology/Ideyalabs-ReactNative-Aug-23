
function blockMe(message) {
    console.log(message)
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

//console.log(getValue())
blockMe('start')
login('foo','admin').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
blockMe('end')
