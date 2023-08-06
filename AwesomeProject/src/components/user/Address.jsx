import { View, Text } from "react-native"
import { Geo } from "./Geo"

export const Address = (props) => {
    return <View>
        <Text>
            {props.address.street}
        </Text>
        <Text>
            {props.address.city}
        </Text>
        <Text>
            {props.address.street}
        </Text>
        <Text>
            {props.address.zipcode}
        </Text>
        <Geo geo={props.address.geo} />
    </View>
}