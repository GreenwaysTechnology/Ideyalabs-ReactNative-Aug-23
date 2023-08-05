import React from 'react';
import ReactDOM from 'react-dom/client';

//es 6 class Pattern
class Heading extends React.Component {
    //override render method
    render() {
        return <h1>Hello , React!</h1>
    }
}


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<Heading></Heading>)
