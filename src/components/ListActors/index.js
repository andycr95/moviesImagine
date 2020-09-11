import React from 'react';
import {FlatList, StyleSheet, View, TouchableHighlight} from 'react-native';
import Avatar from '../Avatar';

export default function ListActors(props) {
  return (
    <View style={styles.row}>
      <FlatList
        data={props.actors}
        horizontal={true}
        style={styles.list}
        renderItem={({item}) => <Avatar key={item.id} item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
  },
  list: {
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10,
  },
});
