import React from 'react';
import ReactDOM from 'react-dom/client';

//object destructuring

// const User = props => {
//     const { title, firstName, lastName, isActive, points, address: { city, state } } = props
//     return <div>
//         <h1>{title}</h1>
//         <h1>Name {firstName} {lastName}</h1>
//         <h2>Status {isActive ? "Available" : "NotAvailable"}</h2>
//         <h3>Points: {points}</h3>
//         <address>
//             <p>{city},</p>
//             <p>{state}</p>
//         </address>
//     </div>
// }

const User = ({ title, firstName, lastName, isActive, points, address: { city, state } }) => <div>
    <h1>{title}</h1>
    <h1>Name {firstName} {lastName}</h1>
    <h2>Status {isActive ? "Available" : "NotAvailable"}</h2>
    <h3>Points: {points}</h3>
    <address>
        <p>{city},</p>
        <p>{state}</p>
    </address>
</div>



let firstName = 'Subramanian'
let lastName = 'Murugan';
let isActive = true
let points = 100
let address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const App = () => <div>
    {/* {User(firstName, lastName, isActive, points)} */}
    <User firstName={firstName} title="User Managment System" address={address} lastName={lastName} isActive={isActive} points={points} />
</div>

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)
