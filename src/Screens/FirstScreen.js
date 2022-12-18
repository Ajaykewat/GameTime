import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Buttons from '../Components/Buttons'
import InputTexts from '../Components/InputTexts'
import TiteText from '../Components/TiteText'

import firestore from '@react-native-firebase/firestore';

const FirstScreen = ({navigation}) => {
    const[name,setname]=useState("");

  return (
    <View style={{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#daf09dab"
        }}>
      
      <TiteText 
      TitleName="Select Type"
      type="Title"
       />
      <TiteText 
      TitleName="you can create room or join the room"
      type="Caption"
       />



<Buttons
buttonName="Create Room"
onPress={()=> navigation.navigate("CreateRoom")}
/>
<Buttons
buttonName="Join Room"
onPress={()=> navigation.navigate("JoinRoom")}
/>

     {/* <InputTexts
     PlaceholderName="Create room"
     value={name}
     SetValue={setname}
     /> */}

    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({})