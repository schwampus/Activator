import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  useNavigation, } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SetupScreen from './screens/SetupScreen';
import DashboardScreen from './screens/DashboardScreen';
import { useCallback, useEffect, useState} from 'react';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();




export default function App() {

  {/* loads custom fonts from asset folder */} 
  const [fontsLoaded, fontError] = useFonts({
    Iceberg: require('./assets/fonts/Iceberg.ttf'),
    TurretRegular: require('./assets/fonts/TurretRoad-Regular.ttf'),
    TurretMedium: require('./assets/fonts/TurretRoad-Medium.ttf'),
    TurretBold: require('./assets/fonts/TurretRoad-Bold.ttf'),
    TurretLight: require('./assets/fonts/TurretRoad-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
 
  useEffect(() => {
    if (fontsLoaded || fontError) {
      onLayoutRootView();
    }
  }, [fontsLoaded, fontError, onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null; 
  }

  if (fontError) {
    console.error('Font loading error:', fontError);
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading fonts</Text>
      </View>
    );
  }

 
  return (
    
    <NavigationContainer  onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setup" component={SetupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: '#1a535c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#f7fff7',
    fontSize: 20,
  },
});



/* colors: 
#1a535c
#f7fff7
#ff6b6b
#ffe66d
#22181c
 */