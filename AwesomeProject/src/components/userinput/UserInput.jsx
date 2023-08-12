import React from 'react'
import { Button, Text, TextInput } from 'react-native'

export class UserInput extends React.Component {
    state = {
        name: 'Your Name'
    };
    onUpdate = (evt) => {
        this.setState(prvState => {
            console.log(evt.target)
            return { ...prvState, name: 'test' }
        })
    }
    render() {
        return <>
            <Text>Your Name : {this.state.name}</Text>
            <TextInput onTextInput={this.onUpdate} value={this.state.name} />
        </>
    }

}
