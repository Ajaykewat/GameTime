import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const NameList = () => {
    const[Names,setNames]=useState(null);
    const[NamesList,setNamesList]=useState([]);


    const AddNames = (name)=>{

        setNames(name),
        // dummyArray.push(Names)
        setNamesList([...Names,...name])

    }
  return (
    <View style={{flex:1,backgroundColor:"gray"}}>
      <Text>{Names}</Text>

      {
        NamesList.length != 0 &&(
            <FlatList
            data={NamesList}
            keyExtractor={(item,index)=>index}
            renderItem={({item,index})=>{
                return(
                    <View>
                        <Text>{item}</Text>
                    </View>
                )
            }}
            />
        )
      }
      <View style={{
        backgroundColor:"green",

      }}>
      
         <TextInput
        style={styles.input}
        onChangeText={(v)=>{setNames(v)}}
        value={Names}
        // onKeyPress="Enter"
        // onSubmitEditing={(v)=> console.log(v)}
        returnKeyType="send"
        keyboardAppearance="default"
        placeholder="useless placeholder"
        keyboardType="default"
      />
      </View>
    </View>
  )
}

export default NameList

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})

// take name from users and add that list on spinner