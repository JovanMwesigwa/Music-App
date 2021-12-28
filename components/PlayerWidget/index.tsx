import { Image, Text, View } from 'react-native'
import { SongTypes } from '../../types'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Song Title',
    artist: 'Taylor Swift'
}

const PlayerWidget = () => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.right}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <AntDesign name="hearto" size={20} color="lightgray" />
                <FontAwesome5 name="play" size={20} color="lightgray" style={{ marginHorizontal: 15 }} />
            </View>
        </View>

    )
}

export default PlayerWidget