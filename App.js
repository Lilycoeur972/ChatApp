import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState,createContext,useContext,useEffect} from 'react';
import { View,ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importation de Chat
import Chat from './screens/Chat';

//importation de Login
import Login from './screens/Login';

//import Signup
import Signup from'./screens/Signup';

//import de Home
import Home from'./screens/Signup';

// Création de la constance stack.
const Stack = createStackNavigator();

//Création de la constante authentificatedUserContext
const AuthenticatedUserContext=createContext({});

//creation authentificatedUserProvider
const AuthenticatedUserProvider=({ children })=>{
  const [user,setUser]=useState(null);
  return
  <AuthenticatedUserContext.Provider value={{user,setUser}}>
    {children}
    </AuthenticatedUserContext.Provider>
}


//Création de la fonction chatstack.
function ChatStack(){
  return(
    /* création du screenOptions*/
    <Stack.Navigator defaultScreenOptions={{Home}}>

     <Stack.Screen name="Home" component={Home}/> 
     <Stack.Screen name="Chat" component={Chat}/>
    </Stack.Navigator>
  )

}
// création de la fonction AuthStack.
function AuthStack() {
  <Stack.Navigator defaultScreenOptions={{Login}}> 
  <Stack.Screen name='Login'component={Login}/>
  <Stack.Screen name='Signup' component={Signup}/>
   </Stack.Navigator>
}
//création de la function RootNavigator

function RootNavigator(){
  const{user,setUser}=useContext(AuthenticatedUserContext);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, 
      async authenticatedUser=>{
        authenticatedUser?setUser(authenticatedUser):setUser(null);
        setLoading(false);
      }
      );
      return()=>unsubscribe();
  },[user]);
  if (loading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }

  return(
    <NavigationContainer>
      {user?<ChatStack/>:<AuthStack/>}
      <ChatStack/>
    </NavigationContainer>
  )
}

export default function App() {
  return  <RootNavigator/>
}
  



