import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AlbumTypes } from '../../types';
import styles from './styles';

export interface AlbumHeaderProps {
    album: AlbumTypes
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: album.imageUri }} style={styles.image} />
            <Text style={styles.name}>{album.title}</Text>

            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By: {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} likes</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <View >
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader;