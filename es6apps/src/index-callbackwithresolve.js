//callbacks

function blocMe(message) {
    console.log(message)
}

function getCameraAsync(resolve, reject) {
    let isEnabled = true
    if (isEnabled) {
        setTimeout(resolve, 5000, "Camera is Available")
    } else {
        setTimeout(reject, 5000, "Camera is not Available")
    }
}
blocMe('start')
getCameraAsync(function (response) {
    console.log(response)
}, function (err) {
    console.log(err)})
blocMe('end')