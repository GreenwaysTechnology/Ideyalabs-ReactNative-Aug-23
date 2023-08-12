//callbacks

function blocMe(message) {
    console.log(message)
}

function delay(callback) {
    setTimeout(callback, 5000)
    //    callback()
}
blocMe('start')
delay(function () {
    console.log('Hello')
})
blocMe('end')