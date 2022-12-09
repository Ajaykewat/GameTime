import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store }from '../Redux/store'
import CombineBoth from '../Components/CombineBoth';


const Stack = createNativeStackNavigator();

const MainRoot = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CombineBoth} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default MainRoot

const styles = StyleSheet.create({})