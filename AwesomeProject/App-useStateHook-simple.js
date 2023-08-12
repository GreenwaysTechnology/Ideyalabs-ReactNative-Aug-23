import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

class Counter__ extends React.Component {
    //inital state
    state = {
        counter: 0
    }
    //Listener
    onIncrement = () => {
        this.setState((prvState) => {
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

const Counter = () => {
    const [value, setValue] = useState(0)

    const onIncrement = () => {
        //logic
        setValue(value + 1)
    }

    return <>
        <Text>Counter {value} </Text>
        <Button onPress={onIncrement} title="+" />
    </>
}


export default function App() {
    return <View style={styles.container}>
        <Counter />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    }
})