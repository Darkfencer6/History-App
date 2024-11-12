import { View, Text } from 'react-native'
import React from 'react'
import { Stack, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/font/Poppins-Black.ttf"),
    "Poppins-ExtraBold": require("../assets/font/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../assets/font/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/font/Poppins-Light.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  




  return (
    <Stack>
      <Stack.Screen options={{headerShown: false}} name="index"/>
    </Stack>
  )
}

export default MainLayout