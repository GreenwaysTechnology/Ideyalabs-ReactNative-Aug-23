import React from 'react'
import { Button, Text } from 'react-native'

export class Counter extends React.Component {
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
            <Text>Counter {this.state.counter} </Text>
            <Button onPress={this.onIncrement} title="Increment" />
        </>
    }

}