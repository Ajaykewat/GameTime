import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Buttons = ({buttonName,onPress}) => {

  return (
    <Pressable
    style={{
     backgroundColor:"green",
     borderColor:"#000",
     borderWidth:2,
     marginHorizontal:30,
     borderRadius:50,
     margin:10
 
 }}
 onPress={onPress}
   >
     <Text
      style={{
         padding:20,
         fontSize:22,
         textAlign:"center",
         color:"white"

     }}
     >
        {buttonName}
     </Text>
   </Pressable>
  )
}

export default Buttons

const styles = StyleSheet.create({})