import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store }from '../Redux/store'
import CombineBoth from '../Components/CombineBoth';
import NameList from '../Screens/NameList';
import CreateRoom from '../Screens/CreateRoom';
import JoinRoom from '../Screens/JoinRoom';
import FirstScreen from '../Screens/FirstScreen';
import WaitingForJoin from '../Screens/WaitingForJoin';
import UserNameScreen from '../Screens/UserNameScreen';
import WaitingRoom from '../Screens/WaitingRoom';


const Stack = createNativeStackNavigator();

const MainRoot = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown:false
      }}
      initialRouteName='FirstScreen'>
        <Stack.Screen name="GameTime" component={CombineBoth} />
        <Stack.Screen name="NameList" component={NameList} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoom} />
        <Stack.Screen name="UserNameScreen" component={UserNameScreen} />
        <Stack.Screen name="WaitingForJoin" component={WaitingForJoin} />
        <Stack.Screen name="JoinRoom" component={JoinRoom} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default MainRoot

const styles = StyleSheet.create({})