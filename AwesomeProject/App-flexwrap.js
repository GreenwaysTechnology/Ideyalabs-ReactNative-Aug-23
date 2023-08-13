import { StyleSheet, View, Text } from 'react-native'

const MyComponent = props => {
    // Flex container
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>Flex wrap</Text>
        <View style={styles.elementsContainer}>
            <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
          
        
        </ View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 24,
        color: 'blue'
    },
    elementsContainer: {
        flex: 1,
        backgroundColor: 'black',
        flexWrap:'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 24
    }

})

const App = () => {
    return <MyComponent />
}

export default App;