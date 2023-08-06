import {ScrollView } from "react-native"
import { AlbumbDetails } from "./AlbumDetails"

export const AlbumMaster = props => {
    return <ScrollView>
        {props.albums.map(album => {
            return <AlbumbDetails album={album} />
        })}
    </ScrollView>
}