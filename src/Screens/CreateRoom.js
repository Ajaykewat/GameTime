import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TiteText from '../Components/TiteText'
import InputTexts from '../Components/InputTexts'
import Buttons from '../Components/Buttons'

const CreateRoom = ({navigation}) => {

    const[name,setname]=useState("");

    const CheckRoom = ()=>{
        if(name !="" || name != undefined){
        navigation.navigate("WaitingForJoin",{RoomName:name})
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
      TitleName="Create Room Name"
      type="Title"
       />
      <TiteText
      TitleName="This Name is used on join the room"
      type="Caption"
       />

       <InputTexts
     PlaceholderName="Enter Room Name"
     value={name}
     SetValue={()=>setname()}
     />

<Buttons
buttonName="Create Room"
onPress={()=> CheckRoom()}
/>
    </View>
  )
}

export default CreateRoom

const styles = StyleSheet.create({})