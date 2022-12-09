import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store }from '../Redux/store'
import CombineBoth from '../Components/CombineBoth';
import NameList from '../Screens/NameList';


const Stack = createNativeStackNavigator();

const MainRoot = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NameList'>
        <Stack.Screen name="Home" component={CombineBoth} />
        <Stack.Screen name="NameList" component={NameList} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default MainRoot

const styles = StyleSheet.create({})