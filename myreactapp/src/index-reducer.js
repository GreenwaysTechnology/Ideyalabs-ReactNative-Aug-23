//React with Redux
import { configureStore } from "@reduxjs/toolkit";
import {produce} from "immer"

import ReactDOM from "react-dom"
import { Provider, useDispatch, useSelector } from "react-redux";

//action constants
const COUNTER_INCREMENT = 'counter/increment';

const incrementReducer = (state = { counter: 10 }, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT:
            // return { ...state, counter: state.counter + 1 } //immuable object
            return produce(state, (draft) => {
                draft.counter += 1
            })

        case 'counter/incrementByAmount':
            return { ...state, counter: state.counter + action.payload } //immuable object

        default:
            return state;
    }
}
const decrementReducer = (state = { counter: 100 }, action) => {
    switch (action.type) {
        case 'counter/decrement':
            return { ...state, counter: state.counter - 1 } //immuable object
        default:
            return state;
    }
}
//step 2: Create Store object -con
const store = configureStore({
    reducer: {
        increment: incrementReducer,
        decrement: decrementReducer
    }
})


//state inside component
const Counter = props => {
    const incrementValue = useSelector((state) => {
        //state means the whole appstate {}
        //if you want filter data sepcific to reducer 
        //state.reducer.state
        return state.increment.counter
    })
    const decrementValue = useSelector((state) => {
        //state means the whole appstate {}
        //if you want filter data sepcific to reducer 
        //state.reducer.state
        return state.decrement.counter
    })

    //get Dispatcher
    const dispatch = useDispatch()

    const onIncrement = () => {
        //send an action to reducer
        const incrementAction = {
            type: COUNTER_INCREMENT
        }
        dispatch(incrementAction)
    }
    //const [counter, setCounter] = useState(0)
    return <>
        <h1>Counter Increment : {incrementValue} Decrementor : {decrementValue} { }</h1>
        {/* <button onClick={() => { setCounter(counter + 1) }}>+</button> */}
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>

        <button onClick={() => {
            dispatch({ type: 'counter/incrementByAmount', payload: 2 })
        }}>IncrementByAmount</button>


    </>
}


//Store Object injection in the root Component
const App = () => <Provider store={store}>
    <Counter />
</Provider>

ReactDOM.render(<App />, document.getElementById('root'));