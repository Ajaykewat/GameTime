import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import SoundPlayer from 'react-native-sound-player'


const SoundScreen = () => {
useEffect(()=>{
    playSong()
    getInfo()

},[])
const playSong =()=> {
    try {
      SoundPlayer.playSoundFile('Clapping', 'm4a')
    } catch (e) {
      alert('Cannot play the file')
      console.log('cannot play the song file', e)
    }
  }

  const getInfo=async()=> { // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
      console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e)
    }
  }
  return (
    <View>
      <Text>SoundScreen</Text>
    </View>
  )
}

export default SoundScreen

const styles = StyleSheet.create({})