import { View } from 'react-native'
import { UserInput } from './src/components/userinput/UserInput'
import { Counter } from './src/components/counter/Counter'
import { StyleSheet } from 'react-native'

export default function App() {
    return <View style={styles.container}>
        <UserInput />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink',
        alignItems: 'center',
        justifyContent: 'center'
    }
})