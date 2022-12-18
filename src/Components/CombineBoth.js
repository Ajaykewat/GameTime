import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import { Peoples } from '../DummyData/PeopleNames';
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


class CombineBoth extends Component {


  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
      ShowWinner: true,
    };
    this.child = null;
  }


  componentDidMount(){
    ding.setVolume(1);
    console.log("DidMount")
  }

  componentWillUnmount(){
    ding.release();
    console.log("unMount")

  }



  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const wheelOptions = {
      rewards: Peoples,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../../knob.png'),
      onRef: ref => (this.child = ref),
    };

    const playPause = () => {
      ding.play(success => {
        
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    };

    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <WheelOfFortune
          options={wheelOptions}
          getWinner={(value, index) => {
            this.setState({winnerValue: value, winnerIndex: index});
            playPause();
          }}
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}>
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}
{/* Winner Name */}

{this.state.winnerIndex != null && (
  <>
          <View style={styles.startButtonView}>
            <View
              onPress={() => this.buttonPress()}
              style={styles.ShowResult}>
              <Text style={styles.ShowResultText}>
             Lucky Name is {Peoples[this.state.winnerIndex]}
              </Text>
              <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>Next Please</Text>
            </TouchableOpacity>
            </View>
          </View>

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
          </>
        )}

        {/* {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            <Text style={styles.winnerText}>
             Winner is {participants[this.state.winnerIndex]}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({winnerIndex: null});
                this.child._tryAgain();
              }}
              style={styles.tryAgainButton}>
              <Text style={styles.tryAgainText}>Next Please</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>
    );
  }
}
export default CombineBoth;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E74C3C'
  },
  startButtonView: {
    position: 'absolute',
  },
  startButton: {
    // backgroundColor: '#fff',
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
    // height:250,width:300
  },
  ShowResult: {
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: 50,
    padding: 5,
    height:250,width:300
  },
  startButtonText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    textAlign:"center"
  },
  ShowResultText: {
    fontSize: 50,
    color: '#000',
    fontWeight: 'bold',
    textAlign:"center"
  },
  winnerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"center",
    color: '#000',
    
  },
});
