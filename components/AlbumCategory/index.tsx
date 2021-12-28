
import { View, Text, FlatList } from 'react-native';
import { AlbumTypes } from '../../types';
import Album from '../Album';
import styles from './styles';

interface AlbumCategoryProps {
    title: string;
    albums: [AlbumTypes]
}


const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.title}</Text>

            <FlatList
                data={props.albums}
                renderItem={({ item }) => <Album album={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default AlbumCategory;