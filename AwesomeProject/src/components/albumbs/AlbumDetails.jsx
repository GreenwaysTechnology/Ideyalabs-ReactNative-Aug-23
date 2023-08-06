import { Text } from "react-native"

export const AlbumbDetails = props => {

    return <>{
        <Text key={props.album.id}>{props.album.title}</Text>
    }
    </>
}