
function blockMe(message) {
    console.log(message)
}
function getError() {
    return Promise.reject('something went wrong') //it returns Promise Object 
}

//console.log(getValue())
blockMe('start')
getError().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
blockMe('end')
