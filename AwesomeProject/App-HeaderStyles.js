import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//create Stack Navigator Object 
const Stack = createNativeStackNavigator();

//Screens
//Todo: create folders inside src/screens/HomeScreen.jsx 
export const Home = (props) => {
    const { navigation: { navigate } } = props

    const profile = {
        id: 1,
        name: 'Subramanian'
    }

    const goToProfile = () => {
        navigate("Profile", { profile })
    }

    return <View style={styles.container}>
        {/* Here any component if you want to insert */}
        <Text>Home Screen</Text>
        <Button onPress={goToProfile} title="Profile" />
    </View>
}
const Profile = (props) => {
    const { navigation: { goBack }, route: { params } } = props
    return <View style={styles.container}>
        <Text>Profile Screen {JSON.stringify(params)}</Text>
        <Button title="Back" onPress={() => goBack()} />

        <Button title="Update Params" onPress={() => {
            props.navigation.setParams({ profile: { id: 900, name: 'foo' } })
        }} />
    </View>
}
const Info = (props) => {
    return <View style={styles.container}>
        <Text>Info</Text>
    </View>
}

export default function App() {
    return <NavigationContainer>
        {/* Stack Navigation */}
        <Stack.Navigator>
            {/* Screens */}
            <Stack.Screen name="Home" options={{ title: 'My Personal Diary' }} component={Home} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
            {/* <Stack.Screen name="Profile" options={(navigation) => {
                console.log(navigation.route.params.profile)
                return {
                    title: navigation.route.params.profile.name || 'Your Header'
                }
            }} component={Profile} /> */}
            <Stack.Screen name="Profile" options={({ route, navigation }) => {
                return {
                    title: `Profile - ${route.params.profile.name}` || '',
                    headerStyle: {
                        backgroundColor: 'yellow'
                    },
                    headerTintColor: 'blue',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerRight: () => {
                        return <Button onPress={() => {
                            alert('Info')
                            navigation.navigate('Info')
                        }} title="Info" color="red" />
                    }
                }
            }
            } component={Profile} initialParams={{ profile: { id: 0, name: 'name' } }} />

            <Stack.Screen name="Info" component={Info}/>
        </Stack.Navigator>
    </NavigationContainer>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});