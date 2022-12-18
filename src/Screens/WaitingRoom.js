import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TiteText from '../Components/TiteText'
import InputTexts from '../Components/InputTexts'
import Buttons from '../Components/Buttons'
import AvatarImages from '../Components/AvatarImages'

const WaitingRoom = ({navigation}) => {

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

      <AvatarImages size={100}/>

      <TiteText
      TitleName="Wait for admin start the event"
      type="Caption"
       />

{/* <Buttons
buttonName="Let's Go"
onPress={()=> CheckRoom()}
/> */}
    </View>
  )
}

export default WaitingRoom

const styles = StyleSheet.create({})