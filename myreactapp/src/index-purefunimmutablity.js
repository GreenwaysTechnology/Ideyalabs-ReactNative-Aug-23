//Pure function Rule A :
import ReactDOM from 'react-dom/client';

//impure function: it updates the original memory address
function updateCustomer_1(customer, city) {
    //update
    customer.city = city
    return customer
}
function updateCustomer(customer, city) {
    //plain js pattern
    // return {
    //     id:customer.id,
    //     name:customer.name,
    //     city:city
    // }
    //Object.assign pattern
    //return Object.assign({}, customer, { city: city })
    //spread operator notation pattern
    return { ...customer, city: city }
}

let customer = {
    id: 1,
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('before update', customer)
const result = updateCustomer(customer, 'Coimbatore')
console.log('after update', result)

console.log('same customer ', customer === result ? 'same' : 'different')




// const App = ()=> {
//     return <></>
// }

// const rootElement = document.getElementById('root')
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />)
