import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useFonts } from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SetupScreen from './screens/SetupScreen';


const Stack = createNativeStackNavigator();

/* const [fontsLoaded] = useFonts({
    Iceberg: require('./assets/fonts/Iceberg.ttf'),
    TurretRegular: require('./assets/fonts/TurretRoad-Regular.ttf'),
    TurretMedium: require('./assets/fonts/TurretRoad-Medium.ttf'),
    TurretBold: require('./assets/fonts/TurretRoad-Bold.ttf'),
    TurretLight: require('./assets/fonts/TurretRoad-Light.ttf')
});

if (!fontsLoaded) {
    return null;
  }; */

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


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Setup" component={SetupScreen}/>
   </Stack.Navigator>
  </NavigationContainer>
  );
}




/* colors: 
#1a535c
#4ecdc4
#f7fff7
#ff6b6b
#ffe66d
#22181c
 */



/* welcome screen v1 
 <View style={styles.container}>
      <Text style={styles.prehero}>welcome to</Text>
      <Text style={styles.herotitle}>ACT!V8R</Text>
      
        <Button
              title="enter now"
             
            />

      <StatusBar style="auto" />

    </View> */