import {View, Text, StyleSheet, TextInput, Button, useColorScheme, StatusBar} from "react-native";
import { useCallback, useEffect, useState} from 'react';


import {
  useNavigation,
  createStaticNavigation,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native';


 


export default function SetupScreen() {
   
const [number, onChangeNumber] = useState('123');
const [text, onChangeText] = useState('Write Your Name');
const [lastName, onChangelastName] = useState('surname');

  return (<>
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.setupTitle}>User Setup</Text>
    </View>
    <View style={styles.box}>
      <Text style ={styles.smallText}>please fill out the form.</Text>
      <View style={styles.personalInfo}>
        <Text style ={styles.smallTextLight}>First Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
       <Text style ={styles.smallTextLight}>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangelastName}
          value={lastName}
        />
      <Text style ={styles.smallTextLight}>Age:</Text>
      <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
      />
  </View> 
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
     backgroundColor: '#1a535c',
  },
  container: {
    alignItems: 'center',
    },
  box: {
    marginTop:4,
    marginLeft:28,
    marginRight:28,
    height:400,
    backgroundColor:'#f7fff7',
    alignItems: 'center',
    
  },
   personalInfo: {
    flexDirection: 'row',
    padding: 4,
    width:' 90%',
    height: 300,
    backgroundColor: '#3e3e3e',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
    alignItems: 'center',
    
  },
  smallText: {
    color: '#1a535c',
    fontSize:20,
    fontWeight: 200,
    fontFamily: 'TurretLight',
  },
   smallTextLight: {
    color: '#f7fff7',
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
  setupTitle: {
    color: '#f7fff7',
    fontSize: 84,
    fontFamily: 'Iceberg',
  },
   input: {
    height: 40,
    width:160,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor:'#f7fff7',
    padding: 10,
     fontSize:16,
    fontWeight: 200,
    fontFamily: 'TurretLight',
  },
});

