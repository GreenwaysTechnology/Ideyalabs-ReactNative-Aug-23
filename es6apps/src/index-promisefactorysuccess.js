
function blockMe(message) {
    console.log(message)
}
function getValue() {
    return Promise.resolve('Hello') //it returns Promise Object 
}

//console.log(getValue())
blockMe('start')
getValue().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
blockMe('end')
