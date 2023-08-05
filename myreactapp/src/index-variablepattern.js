import ReactDOM from 'react-dom/client';

//variable pattern

const Heading = <h1>Hello,React DOM!</h1>

const rootElement = document.getElementById('root')
//where to insert
const root = ReactDOM.createRoot(rootElement);
//mount or insert this node into root tree
root.render(Heading)
