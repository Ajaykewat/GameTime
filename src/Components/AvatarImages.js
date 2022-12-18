import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AvatarImages = ({size}) => {
  return (
    <View
    style={{
        justifyContent:"center",
        alignItems:"center",
        }}
        >
      <Image
      source={require('./../images/avatar2.png')}
      style={{
        height:size,
        width:size,
        resizeMode:"contain",
        padding:20,
        margin:20,
        borderRadius:100
    }}
      />
    </View>
  )
}

export default AvatarImages

const styles = StyleSheet.create({
    
})