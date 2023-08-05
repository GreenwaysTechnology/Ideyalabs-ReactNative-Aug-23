//args and parameters

//a and b are args
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`Result is ${c}`)
}
//parameters-10,10
add(10, 10)
//
add() //undefined,undefined
add(10)
add(undefined, undefined)
add(undefined, 20)