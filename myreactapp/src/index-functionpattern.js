import ReactDOM from 'react-dom/client';

//functions pattern 
// function Heading() {
//     //return component: 
//     return <h1>Hello,React</h1>
// }
// const Heading = () => {
//     return <h1>Hello,React</h1>
// }
const Heading = () => <h1>Hello,React</h1>

const rootElement = document.getElementById('root')
//where to insert
const root = ReactDOM.createRoot(rootElement);
//mount or insert this node into root tree
//imperative rendering
//root.render(Heading())
//declarative
root.render(<Heading></Heading>)
