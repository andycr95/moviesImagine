import React from 'react';
import {InputSearch} from './styles';
import {TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function index() {
  return (
    <InputSearch>
      <Icon name="search" size={13} color="#ffffff" style={style.icon} />
      <TextInput placeholder="Search" placeholderTextColor="#ffffff" />
    </InputSearch>
  );
}

const style = StyleSheet.create({
  icon: {
    opacity: 1,
    marginLeft: 15,
    marginRight: 10,
  },
});
