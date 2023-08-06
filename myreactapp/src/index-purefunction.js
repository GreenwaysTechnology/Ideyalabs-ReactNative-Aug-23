//Pure function Rule A :
import ReactDOM from 'react-dom/client';

function getData(message) {
    return message;
}
getData('hello')

const Greet = props => {
    props.message ="hai";
    return <h1>{props.message}</h1>
}

const App = ()=> {
    return <Greet message="hello"/>
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)
