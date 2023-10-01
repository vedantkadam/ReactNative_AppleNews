import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import React from 'react'
import Home from "../Screens/Home";
import ReadNews from "../Screens/ReadNews";


const  Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Read-News" component={ReadNews} />
   
    </Stack.Navigator>
  )
}