import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTexts = ({PlaceholderName,SetValue,Value}) => {
  return (
    //  <View style={{
    //     paddingHorizontal:20
    //   }}>
        <TextInput
        style={{
            backgroundColor:"gray",
            borderColor:"#000",
            borderWidth:1,
            fontSize:20,
            textAlign:"center",
            marginHorizontal:20,
            marginVertical:10,
            paddingHorizontal:10

        }}
        Value={Value}
        placeholder={PlaceholderName}
        placeholderTextColor="white"

        onChangeText={SetValue}
        />
    //   </View> 
  )
}

export default InputTexts

const styles = StyleSheet.create({})