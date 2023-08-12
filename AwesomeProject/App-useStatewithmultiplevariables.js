import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

const Counter = () => {
    const [incrvalue, setIncrValue] = useState(10)
    const [decrvalue, setDecrValue] = useState(10)
    const onIncrement = () => {
        //logic
        setIncrValue(incrvalue + 1)
    }

    return <>
        <Text>Counter {incrvalue} {decrvalue} </Text>
        <Button onPress={onIncrement} title="+" />
        <Button onPress={() => {
            setDecrValue(decrvalue - 1)
        }} title="-" />

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