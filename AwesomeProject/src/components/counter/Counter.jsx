import React from 'react'
import { Button, Text } from 'react-native'

export class Counter extends React.Component {
    //inital state
    state = {
        incValue: 10,
        decValue: 100
    };
    //Listener
    onIncrement = (e) => {
      this.setState(prvState => ({ ...prvState, incValue: prvState.incValue + 1 }))
    }
    //Listener
    onDecrement = () => {
        this.setState(prvState => ({ ...prvState, decValue: prvState.decValue - 1 }))
    }

    render() {
        // return <CounterDisplay incValue={this.state.incValue} decValue={this.
        // state.decValue}/>
        return <CounterDisplay {...this.state} onIncrement={this.onIncrement} onDecrement={this.onDecrement}  />

    }

}
//CounterDisplay = >Stateless component or presentational component
// Todo:You have to write in a separate file CounterDisplay.jsx
export const CounterDisplay = props => {
    return <>
        <Text>Increment Value {props.incValue} DecrementValue {props.decValue}  </Text>
        <Button onPress={props.onIncrement} title="Increment" />
        <Button onPress={props.onDecrement} title="Decrement" />

    </>
}