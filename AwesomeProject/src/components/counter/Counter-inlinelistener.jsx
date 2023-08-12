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
        return <>
            <Text>Counter {this.state.counter} </Text>
            <Button onPress={this.onIncrement} title="Increment" />
            {/* Inline event handling */}
            <Button onPress={() => {
                this.setState(prvState => ({ ...prvState, counter: prvState.counter + - 1}))

            }} title="Decrement" />
        </>
    }

}