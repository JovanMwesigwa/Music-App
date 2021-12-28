import { FlatList, StyleSheet } from 'react-native';
import Album from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ALbumCategories from '../data/albumCategories'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      {/* <Album album={album} /> */}
      <FlatList
        data={ALbumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
