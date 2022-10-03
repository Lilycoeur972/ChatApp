import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from './screens/Chat';

// Création de la constance stack.
const Stack = createStackNavigator();

//Création de la fonction chatstack.
function ChatStack(){
  return(
    <Stack.Navigator>
     <Stack.Screen name="Chat" component={Chat}/> 
    </Stack.Navigator>
  )

}
//création de la function RootNavigator

function RootNavigator(){
  return(
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  )
}

export default function App() {
  return  <RootNavigator/>}
  



