import { FlatList, StatusBar, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useState } from 'react'
import TiteText from '../Components/TiteText'
import InputTexts from '../Components/InputTexts'
import Buttons from '../Components/Buttons'
import { Peoples } from '../DummyData/PeopleNames'
import AvatarImages from '../Components/AvatarImages'





export default function WaitingForJoin({navigation}) {
    const[name,setname]=useState("");
  return (
    <View
    style={{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#daf09dab"
        }}
        >
       <TiteText 
      TitleName="Waiting for members to join"
      type="Title"
       />
      <TiteText
      TitleName="Start the game when all memebers are join"
      type="Caption"
       />
      <TiteText
      TitleName={Peoples.length.toString()+"  "+"Members joined"}
      type="Caption"
       />
       <FlatList
        data={Peoples}
        style={{
          flex:1,
          marginHorizontal:10,
          paddingHorizontal:20,
         
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        renderItem={({ item }) => <AvatarImages size={70}/>}
        keyExtractor={index => index.toString()}
        // ListFooterComponent={()=> <Buttons
        //   buttonName="Start The Game"
        //   onPress={()=> navigation.navigate("CreateRoom")}
        //   />}
        //   ListFooterComponentStyle={{ 
        //     marginBottom:20,
        //   }}
      />



{
  Peoples.length > 0 &&(
    // <View style={{position:"absolute",bottom:40,right:40,left:40}}>
<Buttons
buttonName="Start The Game"
onPress={()=> navigation.navigate("GameTime")}
/>
// </View>
  )
}



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
