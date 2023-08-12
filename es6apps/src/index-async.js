//async function 

async function  getValue(){
    return 10 //return Promise.resolve(10)
}
console.log(getValue())
getValue().then(value=>console.log(value))
