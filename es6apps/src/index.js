
const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
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
    })

}

const login = user => {
    console.log('login is called')

    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })

}
const showdashboard = (status, resolve, reject) => {
    console.log('showdashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, 'You are Admin')
        } else {
            setTimeout(reject, 1000, 'You are  Guest')
        }
    })

}

async function main() {
    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showdashboard(status)
        console.log(user, status, page)
    }
    catch (err) {
        console.log(err)
    }
}
main()
