import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NameList = () => {
  return (
    <View style={styles.container}>
      <Text>NameList</Text>
    </View>
  )
}

export default NameList

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"gray"
  }
})