import { Text, View } from "react-native";

const App = () => <View style={{ flex: 1 }}>
    {/* Flex items:children */}
    <View style={{ flex: 1, backgroundColor: 'red' }} />
    <View style={{ flex: 2, backgroundColor: 'yellow' }} />
    <View style={{ flex: 3, backgroundColor: 'blue' }} />
</View>
export default App;