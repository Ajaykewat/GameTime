import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TiteText = ({TitleName,type}) => {
  return (
      <Text
       style={{
        fontSize:type=="Title"?28:16,
        color:type=="Title"?"#000":"gray",
        textAlign:"center",
        padding:10
      }}
      >{TitleName}</Text>
  )
}

export default TiteText

const styles = StyleSheet.create({})