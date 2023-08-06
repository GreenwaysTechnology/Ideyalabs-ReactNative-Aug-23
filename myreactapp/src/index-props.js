import React from 'react';
import ReactDOM from 'react-dom/client';

//User 
// const User = (firstName, lastName, isActive, points) => {
//     return <div>
//         <h1>Name {firstName} {lastName}</h1>
//         <h2>Status {isActive ? "Available" : "NotAvailable"}</h2>
//         <h3>Points: {points}</h3>
//     </div>
// }
//props={firstName:'Subramanian',}
const User = props => <div>
    <h1>{props.title}</h1>
    <h1>Name {props.firstName} {props.lastName}</h1>
    <h2>Status {props.isActive ? "Available" : "NotAvailable"}</h2>
    <h3>Points: {props.points}</h3>
    <address>
         <p>{props.address.city},</p>
         <p>{props.address.state}</p>
    </address>
</div>


let firstName = 'Subramanian'
let lastName = 'Murugan';
let isActive = true
let points = 100
let address = {
    city:'Coimbatore',
    state:'Tamil Nadu'
}
const App = () => <div>
    {/* {User(firstName, lastName, isActive, points)} */}
    <User firstName={firstName} title="User Managment System" address={address} lastName={lastName} isActive={isActive} points={points} />
</div>

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)
