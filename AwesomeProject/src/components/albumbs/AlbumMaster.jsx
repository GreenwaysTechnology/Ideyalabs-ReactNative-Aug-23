import { FlatList, ScrollView, Text } from "react-native"
import { AlbumbDetails } from "./AlbumDetails"

// export const AlbumMaster = props => {
//     return <ScrollView>
//         {props.albums.map(album => {
//             return <AlbumbDetails album={album} />
//         })}
//     </ScrollView>
// }

// export const AlbumMaster = props => {
//     return <FlatList data={props.albums} renderItem={({ item }) => {
//         //return <Text>{item.title}</Text>
//         return <AlbumbDetails album={item}/>
//     }} />
// }
export const AlbumMaster = props => <FlatList data={props.albums}
    renderItem={({ item }) => <AlbumbDetails album={item} />} />
