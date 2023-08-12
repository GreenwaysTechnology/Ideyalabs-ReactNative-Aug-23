import { View } from 'react-native'
import { Counter } from './src/components/counter/Counter'
import { StyleSheet } from 'react-native'

export default function App() {
    return <View style={styles.container}>
        <Counter />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})