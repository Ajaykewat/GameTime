import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TiteText from '../Components/TiteText'
import InputTexts from '../Components/InputTexts'
import Buttons from '../Components/Buttons'

const JoinRoom = ({navigation}) => {

    const[roomCode,setroomCode]=useState("");

    const CheckRoom = ()=>{
        if(roomCode !="" || roomCode != undefined){
        navigation.navigate("UserNameScreen")
        }else{
            Alert.alert("","Enter Room Name")
        }
    }
  return (
    <View
    style={{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#daf09dab"
        }}
        >
       <TiteText 
      TitleName="Enter the Room Code"
      type="Title"
       />
      <TiteText
      TitleName="use the code to enter the room"
      type="Caption"
       />

       <InputTexts
     PlaceholderName="Enter Room Code"
     value={roomCode}
     SetValue={()=>setroomCode()}
     />

<Buttons
buttonName="Create Room"
onPress={()=> CheckRoom()}
/>
    </View>
  )
}

export default JoinRoom

const styles = StyleSheet.create({
    
})