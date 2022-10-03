import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importation de Chat
import Chat from './screens/Chat';

//importation de Login
import Login from './screens/Login';

// Création de la constance stack.
const Stack = createStackNavigator();

//Création de la fonction chatstack.
function ChatStack(){
  return(
    <Stack.Navigator>
     <Stack.Screen name="Login" component={Login}/> 
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
  



