import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../assets/constants'; 

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: focused ? color : '#8e8e8e' }]} 
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        /> 

        <Tabs.Screen
          name="album"
          options={{
            title: 'Album',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.album}
                color={color}
                name="Album"
                focused={focused}
              />
            ),
          }}
        /> /* End of Album Icon */

        <Tabs.Screen
          name="info"
          options={{
            title: 'Info',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.info}
                color={color}
                name="Info"
                focused={focused}
              />
            ),
          }}
        /> /* End of Info Icon */

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        /> /* End of Profile Icon */
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24, 
  },
});
