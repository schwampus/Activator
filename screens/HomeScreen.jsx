import {View, Text, StyleSheet, Button, StatusBar} from "react-native";
import { useFonts } from 'expo-font';





export default function HomeScreen({ navigation }) {

  
  return (
    <View style={styles.container}>
      <Text style={styles.prehero}>welcome to</Text>
      <Text style={styles.herotitle}>ACT!V8R</Text>
      
        <Button
              title="enter now" onPress={ () => navigation.navigate("Setup")  }
             
            />

      <StatusBar style="auto" />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a535c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prehero: {
    color: '#f7fff7',
    fontSize:20,
    fontWeight: 200,
    fontFamily: 'TurretLight',
  },
  herotitle: {
    color: '#f7fff7',
    fontSize: 84,
    
    fontFamily: 'Iceberg',
  },
});