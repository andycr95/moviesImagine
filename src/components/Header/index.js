import React from 'react';
import {Header, TextHeader} from './styles';
import SearchInput from '../../components/Search';
import {View} from 'react-native';

export default function Home() {
  return (
    <Header>
      <View style={{width: '70%'}}>
        <TextHeader style={{lineHeight: 40}}>
          Hello, what do you want to watch?
        </TextHeader>
      </View>
      <SearchInput />
    </Header>
  );
}
