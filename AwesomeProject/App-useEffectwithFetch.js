
import { StyleSheet, Text, View, Button, Alert, StatusBar, ActivityIndicator, FlatList } from 'react-native'
import { useEffect, useState } from 'react'

const Todos = props => {
    const [todos, setTodos] = useState({
        error: null,
        isLoaded: false,  //spinners or progress bar 
        items: [] //todo data 
    })
    useEffect(() => {
        //api logic
        const url = `https://jsonplaceholder.typicode.com/todos`;
        fetch(url)
            .then(response => {
                //extract data 
                return response.json()
            })
            .then(todos => {
                console.log(todos)
                setTodos({
                    items: todos,
                    isLoaded: true
                })
            })
            .catch(err => {
                setTodos({
                    isLoaded: true,
                    error: err
                })
            })
    }, [])

    const { error, isLoaded, items } = todos;
    // conditional rendering:
    if (error) {
        return <View>
            <Text>Error: {error.message}</Text>
        </View>
    }
    else if (!isLoaded) {
        //show spinner
        return <View style={{
            alignItems: 'center', justifyContent: 'center'
        }}>
            <ActivityIndicator size="large" color="#000ff" />
        </View >
    } else {
        //show data
        return <FlatList
            keyExtractor={(todo) => {
                return todo.id
            }}
            data={items}
            renderItem={({ item }) => {
                const { title } = item
                return <View style={styles.item} >
                    <Text style={styles.text}>{title}</Text>
                </View>
            }

            }
        />
    }
}



const App = () => {
    return <View style={styles.container}>
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'red', textAlign: 'center' }} >Todo App</Text>
        <Todos />

    </View>
}
//page style :Common style 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8
    },
    title: {
        fontSize: 32
    }
})

export default App; 