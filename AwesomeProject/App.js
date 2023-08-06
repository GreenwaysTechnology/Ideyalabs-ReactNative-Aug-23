import { ALBUMS } from "./src/components/mock-data/albums";
import { View } from "react-native";
import { AlbumMaster } from "./src/components/albumbs/AlbumMaster";

const App = props => <View>
    <AlbumMaster albums={ALBUMS} />
</View>

export default App;