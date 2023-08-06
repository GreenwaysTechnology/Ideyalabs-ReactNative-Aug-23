import React from 'react';
import ReactDOM from 'react-dom/client';

//User 
const User = () => {
    let firstName = 'Subramanian'
    let lastName = 'Murugan';
    let isActive = true
    let points = 100

    return <div>
        <h1>Name {firstName} {lastName}</h1>
        <h2>Status {isActive ? "Available" : "NotAvailable"}</h2>
        <h3>Points: {points}</h3>
    </div>
}


const App = () => <div>
        <User/>
</div>

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)
