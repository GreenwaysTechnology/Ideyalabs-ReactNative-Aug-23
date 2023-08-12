import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

const Counter = () => {
    let state = { value: 10 };
    const [counter, setCounter] = useState(state)
    const onIncrement = () => {
        setCounter(oldState => {
            console.log(oldState)
            return { ...oldState, value: oldState.value + 1 }
        })
    }
    return <>
        <CounterDisplay counter={counter} onIncrement={onIncrement} />
    </>
}
const CounterDisplay = props => {
    return <><Text>Counter {props.counter.value}</Text>
        <Button onPress={props.onIncrement} title="+" />
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