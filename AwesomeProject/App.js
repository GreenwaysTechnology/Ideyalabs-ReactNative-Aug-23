import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'


const RootLayout = props => {
    return <View style={styles.rootlayout}>
        {props.children}
    </View>
}
const HeaderLayout = props => {
    return <View style={styles.headerlayout}>
        {props.children}
    </View>
}
const Page = props => {
    return <>
        <Text>Page</Text>
    </>
}
const Header = props => {
    return <>
        <Text>Header</Text>
    </>
}

export default function App() {
    return <View style={styles.container}>
        <RootLayout>
            <HeaderLayout>
                    <Header/>
            </HeaderLayout>
            <Page />
        </RootLayout>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rootlayout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerlayout: {
        backgroundColor:'pink'
    },
})