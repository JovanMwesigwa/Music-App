import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { AlbumTypes } from '../../types';
import styles from './styles';


interface AlbumProps {
    album: AlbumTypes
}

interface NavigationProps {
    album: AlbumTypes
}

const Album = (props: AlbumProps) => {

    const navigation = useNavigation();

    const onPress = (): void => {
        navigation.navigate('AlbumScreen', { id: props.album.id });
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                {/* <Text style={styles.text}>{props.album.albumName}</Text> */}
                <Text style={styles.text}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default Album;