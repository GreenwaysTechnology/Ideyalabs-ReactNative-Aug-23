import { StyleSheet, Text, View } from 'react-native'



const App = () => {
    return <View style={container}>
        <Text style={label}>Hello</Text>
        <Text style={{
            color: "red",
            textAlign: "center",
            fontSize: 30
        }}>Hello View!</Text>
    </View>
}
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'gray'
//     },
//     label: {
//         color:'red'
//     }
// })
const { container, label } = StyleSheet.create({
    container: {
        backgroundColor: 'gray'
    },
    label: {
        color: 'red'
    }
})


export default App; 