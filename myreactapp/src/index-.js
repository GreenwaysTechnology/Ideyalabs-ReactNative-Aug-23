import React from 'react'
import ReactDOM from 'react-dom/client';

class Counter extends React.Component {
    //inital state
    state = {
        counter: 0
    }
    //Listener
    onIncrement = () => {
        this.setState((prvState) => {
            //immutable object 
            // return {
            //     counter: prvState.counter + 1
            // }
            // return Object.assign({}, prvState, { counter: prvState.counter + 1 })
            return { ...prvState, counter: prvState.counter + 1 }
        })
    }

    render() {
        return <>
            <h1>Counter {this.state.counter} </h1>
            <button onClick={this.onIncrement} >increment</button>
        </>
    }

}


const App = () => {
    return <Counter />
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(<App />)