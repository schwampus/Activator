import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
    Iceberg: require('./assets/fonts/Iceberg.ttf'),
    TurretRegular: require('./assets/fonts/TurretRoad-Regular.ttf'),
    TurretMedium: require('./assets/fonts/TurretRoad-Medium.ttf'),
    TurretBold: require('./assets/fonts/TurretRoad-Bold.ttf'),
    TurretLight: require('./assets/fonts/TurretRoad-Light.ttf')

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.prehero}>welcome to</Text>
      <Text style={styles.herotitle}>ACT!V8R</Text>
      
        <Button
              title="enter now"
              buttonStyle={{ backgroundColor: '#22181c' }}
              containerStyle={{
                width: 160,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
              titleStyle={{ fontFamily: 'TurretLight' ,color: 'white', marginHorizontal: 20 }}
            />

      <StatusBar style="auto" />

    </View>
  );
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
    // fontWeight: '900',
    fontFamily: 'Iceberg',
  },

});



/* colors: 
#1a535c
#4ecdc4
#f7fff7
#ff6b6b
#ffe66d
#22181c
 */