import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

//Parent 
class Parent extends React.Component {
    constructor() {
        super()
        console.log('Parent Constructor is called')
    }
    render() {
        console.log('Parent render is called')
        return <>
            <Child />
        </>
    }
    componentDidMount() {
        console.log('Parent componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Parent componentDidUpdate is called')
    }
}

class Child extends React.Component {
    constructor() {
        super()
        console.log('Child Constructor is called')
    }
    render() {
        console.log('Child render is called')
        return <>
        </>
    }
    componentDidMount() {
        console.log('Child componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate is called')
    }
}

export default function App() {
    return <View style={styles.container}>
        <Parent />
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