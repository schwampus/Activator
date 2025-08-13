import {View, Text, StyleSheet, Button, StatusBar} from "react-native";

export default function SetupScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.prehero}>welcome to</Text> */}
      <Text style={styles.herotitle}>User Setup</Text>
      
        

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