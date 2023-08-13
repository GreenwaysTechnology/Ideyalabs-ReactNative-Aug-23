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
        flex: 1,
        backgroundColor:'pink'
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
        backgroundColor: 'steelblue',
        flexWrap:'wrap',
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginBottom: 24,
        rowGap:10,
        columnGap:10
    }

})

const App = () => {
    return <MyComponent />
}

export default App;