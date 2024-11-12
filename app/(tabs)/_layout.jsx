import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../assets/constants'

const TabIcon=({icon,color,name,focused})=>{
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-10"
      />
    </View>
  )
}




const TabLayout = () => {
  return (
    <>
      <Tabs>
          <Tabs.Screen 
          name="home"
          options={{
            title:'Home', 
            headerShown:false,
            tabBarIcon:({color,focused}) =>(
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        /> //end of Home Icon 

        <Tabs.Screen
          name="album"
          options={{
          title:"Album",
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.album}
                color={color}
                name="Album"
                focused={focused}
              />
          )
          }}
        /> //end of Album Icon


          <Tabs.Screen
          name="info"
          options={{
          title:"Info",
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.info}
                color={color}
                name="Info"
                focused={focused}
              />
          )
          }}
        /> //end of Info Icon


          <Tabs.Screen
          name="profile"
          options={{
          title:"Profile",
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
          )
          }}
        /> //end of Album Icon



      </Tabs>
    </>
  )
}







export default TabLayout


const styles = StyleSheet.create({})