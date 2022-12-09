

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity,Text, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fireworks from 'react-native-fireworks';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

var Sound = require('react-native-sound');


Sound.setCategory('Playback');


var ding = new Sound('Clapping.mp3', Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
  console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());

});
const SoundScreen = () => {

  const[ShowFireWorks,setShowFireWorks]=useState(false);

 

  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);
  const playPause = () => {
    setShowFireWorks(true);
    ding.play(success => {
      
      if (success) {
        console.log('successfully finished playing');
        setShowFireWorks(false);
      } else {
        console.log('playback failed due to audio decoding errors');
        setShowFireWorks(false);
      }
    });
  };
  return (
    <View style={styles.container}>
      {
        ShowFireWorks && (
          // <Fireworks
         
          // />
          <Fireworks
  speed={3}
  density={8}
  colors={['#ff0','#ff3','#cc0','#ff4500','#ff6347']}
  iterations={5}
  height={height}
  width={width}
  zIndex={2}
  circular={true}
/>
        )
      }
      <TouchableOpacity style={styles.playBtn} onPress={playPause}>
        <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
        <Text 
        style={{
          color:"#fff",
          fontSize:20
        }}
        >play</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  playBtn: {
    padding: 20,
  },
});
export default SoundScreen;