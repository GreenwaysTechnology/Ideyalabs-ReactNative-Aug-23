import { View, Text } from "react-native"
import { Address } from "./Address"



export const User = (props) => {
    return <View>
        <Text>
            {props.user.id}
        </Text>
        <Text>
            {props.user.name}
        </Text>
        <Text>
            {props.user.username}
        </Text>
        <Text>
            {props.user.email}
        </Text>
        <Address address={props.user.address} />
    </View>
}