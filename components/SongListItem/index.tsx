import { Image, Text, View } from 'react-native'
import { SongTypes } from '../../types'
import styles from './styles';

export interface SongListItemProps {
    song: SongTypes
}

const SongListItem = (props: SongListItemProps) => {

    const { song } = props;

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.right}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View>

    )
}

export default SongListItem