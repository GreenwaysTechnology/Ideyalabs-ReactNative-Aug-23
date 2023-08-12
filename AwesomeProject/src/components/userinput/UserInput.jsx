import React from 'react'
import { Alert, Button, Text, TextInput } from 'react-native'

export class UserInput extends React.Component {
    state = {
        name: 'Your Name'
    };
    // onUpdate = (text) => {
    //     this.setState((prevState) => {
    //         return { ...prevState, name: text }
    //     })
    //     // onChangeText={(text) => this.setState({text})}  
    // }
    // onUpdate = name => {
    //     this.setState({ name })
    // }
    render() {
        return <>
            <Text>Your Name : {this.state.name}</Text>
            <TextInput onChangeText={() => {
                this.setState({ name })
            }} value={this.state.name} />
            <Button onPress={() => {
                Alert.alert(this.state.name)
            }} title="Show Text" />
        </>
    }

}
