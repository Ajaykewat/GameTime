import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TiteText from '../Components/TiteText'
import InputTexts from '../Components/InputTexts'
import Buttons from '../Components/Buttons'

const UserNameScreen = ({navigation}) => {

    const[userName,setuserName]=useState("");

    const CheckRoom = ()=>{
        if(userName !="" || userName != undefined){
        navigation.navigate("WaitingRoom")
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
      TitleName="Set Your Name"
      type="Title"
       />
      <TiteText
      TitleName="use the code to enter the room"
      type="Caption"
       />

       <InputTexts
     PlaceholderName="Enter Your Name"
     value={userName}
     SetValue={()=>setuserName()}
     />

<Buttons
buttonName="Let's Go"
onPress={()=> CheckRoom()}
/>
    </View>
  )
}

export default UserNameScreen

const styles = StyleSheet.create({})