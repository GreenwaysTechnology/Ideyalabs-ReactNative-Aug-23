import React from 'react';
import ReactDOM from 'react-dom/client';

const User = ({ title, skills, firstName, lastName, isActive, points, address: { city, state } }) => <div>
    <h1>{title}</h1>
    <h1>Name {firstName} {lastName}</h1>
    <h2>Status {isActive ? "Available" : "NotAvailable"}</h2>
    <h3>Points: {points}</h3>
    <address>
        <p>{city},</p>
        <p>{state}</p>
    </address>
    <h3>Skills</h3>
    <ul>
        {
            skills.map(skill=>{
                return <li>{skill.name}</li>
            })
        }
    </ul>
</div>



let firstName = 'Subramanian'
let lastName = 'Murugan';
let isActive = true
let points = 100
let address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
let skills = [{ id: 1, name: 'Javascript' }, { id: 2, name: 'React' }]


const App = () => <div>
    {/* {User(firstName, lastName, isActive, points)} */}
    <User firstName={firstName} title="User Managment System" skills={skills} address={address} lastName={lastName} isActive={isActive} points={points} />
</div>

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)
