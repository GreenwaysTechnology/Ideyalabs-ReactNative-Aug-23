function displayEmployee_1(employee) {
    //print employee
    console.log(`id ${employee.id}`)
    console.log(`name ${employee.name}`)
    console.log(`salary ${employee.salary}`)
    console.log(`city ${employee.address.city}`)
}
// displayEmployee({ id: 1, name: 'Subramanian', salary: 2000, address: { city: 'Coimbatore' } })
//object destructuring: simplify the property access 
function displayEmployee_2(employee) {
    //destructure 
    const { id, name, salary, address: { city } } = employee
    //print employee
    console.log(`id ${id}`)
    console.log(`name ${name}`)
    console.log(`salary ${salary}`)
    console.log(`city ${address.city}`)
}
// displayEmployee({ id: 1, name: 'Subramanian', salary: 2000, address: { city: 'Coimbatore' } })



const displayEmployee = ({ id, name, salary, address: { city } }) => {
    console.log(`id ${id}`)
    console.log(`name ${name}`)
    console.log(`salary ${salary}`)
    console.log(`city ${city}`)
}
displayEmployee({ id: 1, name: 'Subramanian', salary: 2000, address: { city: 'Coimbatore' } })
/////////////////////////////////////////////////////////////////////////////////////
//Object return and destructuring.

function getStock_1() {
    //return object
    return {
        id: 1,
        symbol: 'google',
        qty: 100,
        price: 10000
    }
}
// console.log(getStock())

// function getStock(id = 1, symbol = 'google', qty = 100, price = 1000) {
//     //return object
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock(12, 'ideaylabs', 1000, 1800))

// function getStock(id = 1, symbol = 'google', qty = 100, price = 1000) {
//     //return object
//     //key:localvariable if it is same 
//     //leftside:rightside if it is same, Make it one 
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock(12, 'ideaylabs', 1000, 1800))

const getStock = (id = 1, symbol = 'google', qty = 100, price = 1000) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock(12, 'ideaylabs', 1000, 1800))