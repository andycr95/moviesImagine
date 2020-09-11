import React from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CardMovie from '../Card';

export default function ListCards(props) {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.recom}>{props.title}</Text>
        <Text style={styles.see}>Sell all</Text>
      </View>
      <FlatList
        data={props.data}
        horizontal={true}
        style={styles.list}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Details', {movieId: item.id})
            }>
            <CardMovie item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
  },
  list: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 30,
  },
  recom: {
    fontSize: 13,
    color: '#ffffff',
    fontFamily: 'OpenSans-SemiBold',
  },
  see: {
    fontSize: 13,
    color: '#ffffff',
    opacity: 0.6,
    fontFamily: 'OpenSans-SemiBold',
  },
});
