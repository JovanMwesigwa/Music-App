import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, FlatList, } from 'react-native';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';

import albumDetails from '../data/albumDetails';

const AlbumScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route)
    }, [])
    return (
        <View style={{ padding: 12, marginTop: 18 }}>
            <FlatList
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default AlbumScreen