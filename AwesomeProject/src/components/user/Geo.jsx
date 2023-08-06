import { View, Text } from "react-native"

export const Geo = (props) => {
    return <View>
        <Text>
            {props.geo.lat}
        </Text>
        <Text>
            {props.geo.lng}
        </Text>

    </View>
}