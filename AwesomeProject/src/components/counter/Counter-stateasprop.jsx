import React from 'react'
import { Button, Text } from 'react-native'

export class Counter extends React.Component {
    //inital state
    state = {
        counter: 0
    }
    //Listener
    onIncrement = () => {
        this.setState(prvState => ({ ...prvState, counter: prvState.counter + 1 }))
    }

    render() {
        return <CounterDisplay counter={this.state.counter} onIncrement={this.onIncrement} />

    }

}
//CounterDisplay = >Stateless component or presentational component
// Todo:You have to write in a separate file CounterDisplay.jsx
export const CounterDisplay = props => {
    return <>
        <Text>Counter {props.counter} </Text>
        <Button onPress={props.onIncrement} title="Increment" />
    </>
}