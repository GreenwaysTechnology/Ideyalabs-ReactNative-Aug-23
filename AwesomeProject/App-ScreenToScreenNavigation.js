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

    const goToProfile = () => {
         navigate("Profile")
    }

    return <View style={styles.container}>
        {/* Here any component if you want to insert */}
        <Text>Home Screen</Text>
        <Button onPress={goToProfile} title="Profile" />
    </View>
}
const Profile = () => {
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
}

export default function App() {
    return <NavigationContainer>
        {/* Stack Navigation */}
        <Stack.Navigator>
            {/* Screens */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
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