
function login() {
    let isLoggedIn = true
    return new Promise((resolve, reject) => {
        if (isLoggedIn) {
            setTimeout(resolve, 1000, 'success')
        } else {
            setTimeout(reject, 1000, 'failed')
        }
    })

}
// login().then(res => console.log(res)).catch(err => {
//     console.log(err)
// })
async function main() {
    try {
        const res = await login()
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()