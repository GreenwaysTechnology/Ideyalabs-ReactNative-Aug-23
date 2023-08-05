import React from 'react';
import ReactDOM from 'react-dom/client';

// const Heading = () => <React.Fragment>
//     <h1>Hello,React</h1>
//     <p>Ideya Labs</p>
// </React.Fragment>
const Heading = () => <>
    <h1>Hello,React</h1>
    <p>Ideya Labs</p>
</>

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<Heading/>)
