
const getUser = (resolve, reject) => {
    console.log('getUser is called')

    let user = {
        id: 1,
        name: 'admin'
    }
    // user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { err: 'User is not available' })

    }
}

const login = (user, resolve, reject) => {
    console.log('login is called')

    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showdashboard = (status, resolve, reject) => {
    console.log('showdashboard is called')

    if (status === 'login success') {
        setTimeout(resolve, 1000, 'You are Admin')
    } else {
        setTimeout(reject, 1000, 'You are  Guest')
    }
}
getUser((user) => {

    login(user, (status) => {
        showdashboard(status, (page) => {
            console.log(page)
        }, (err) => {
            console.log(err)
        })
    }, (err) => {
        console.log(err)

    })
}, (err) => {
    console.log(err)

})