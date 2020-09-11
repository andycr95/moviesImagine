/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import generateStore from './src/redux/store';

const Stack = createStackNavigator();
const store = generateStore();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
