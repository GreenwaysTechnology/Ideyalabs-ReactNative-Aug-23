let customer = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
}
console.log(customer.id, customer.name, customer.city)
customer.id = 90
customer.name = 'ram'
console.log(customer.id, customer.name, customer.city)

let person = {
    id: 1,
    name: 'Subramanian',
    address: {
        street: '10th street',
        city: 'Coimbatore'
    }
}
console.log(person.id, person.name, person.address.city)