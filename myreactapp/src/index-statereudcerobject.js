//React with Redux
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom"
import { Provider, useDispatch, useSelector } from "react-redux";


//redux 
//Step 1:reducer
const CounterReducer = (state = { counter: 10 }, action) => {
    //bizlogic
    switch (action.type) {
        case 'counter/increment':
            return { ...state, counter: state.counter + 1 }
        default:
            return state;
    }
}
//step 2: Create Store object -con
const store = configureStore({ reducer: CounterReducer })


//state inside component
const Counter = props => {
    const counter = useSelector((state) => {
        return state.counter;
    })
    //get Dispatcher
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send an action to reducer
        const incrementAction = {
            type: 'counter/increment'
        }
        dispatch(incrementAction)
    }
    //const [counter, setCounter] = useState(0)
    return <>
        <h1>Counter : {counter}</h1>
        {/* <button onClick={() => { setCounter(counter + 1) }}>+</button> */}
        <button onClick={onIncrement}>+</button>
    </>
}


//Store Object injection in the root Component
const App = () => <Provider store={store}>
    <Counter />
</Provider>

ReactDOM.render(<App />, document.getElementById('root'));