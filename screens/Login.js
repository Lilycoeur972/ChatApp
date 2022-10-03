import React ,{useState} from "react";
import { StyleSheet,Text,View,Button,Image,SafeAreaView,TouchableOpacity, StatusBar,Alert} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import{auth} from"./config/firebase";

const backgroundColor =require("../assets/backImage.png");

export default function Login ({navigation}){
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");

    const onHandleLogin =() =>{
        if (email!=="" && password !==""){
            signInWithEmailAndPassword(auth,email,password)
             .then(()=> console.log("Login sucess") )
             .catch((err)=>Alert.alert("Login error",err.message));

        }
    };
    return(
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage}/>
            <View style={styles.whiteSheet}/>

            <SafeAreaView style={styles.form}>
                {/* style du text de l'adresse email. */}
                <Text style={styles.title}>Login</Text>
                <Text input style={styles.input}placeholder="Entrer votre email"
                autoCapitalize="name"
                keyboardType="email-adress"
                textContentType="emailAddress"
                autoFocus={true}
                value={email}
                onchangeText={(text)=>setEmail(text)}/>

               {/*syle du texte du mot de passe  */}
                <Text style={styles.title}>Password</Text>
                <Text input style={styles.input}
                placeholder="Entrer votre mot de passe"
                autoCapitalize="name"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="Mot de passe"
                value={password}
                onchangeText={(text)=>setPassword(text)}/>

               {/*boutton onPress Login */}
               <TouchableOpacity style={styles.button}onPress={onHandleLogin}>
                 <Text style={{fontWeight:'bold',color:"#fff",fontSize:18}}> Log In</Text>
               </TouchableOpacity>

               <View style={{marginTop:20,flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
               <Text style={{color:'gray',fontWeight:'600',fontSize:14}}>As-tu un compte?</Text>
               
               {/*boutton onPress signup */}
               <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
               < Text style={{color:'#f5c00',fontWeight:'600',fontSize:14}}> Sign Up</Text>
               </TouchableOpacity>
               </View>
            </SafeAreaView>
        </View>
    )

}
const styles= StyleSheet.create[{
    container:{
        flex:1,
        backgroundColor:"#fff",
    },

    title:{
        fontSize:36,
        fontWeight:"bold",
        color:"orange",
        alignSelf:"center",
        paddingBottom:24,

    },

    input:{
        backgroundColor:""
    },

    backImage:{
      width:"100%",
      height:"75%",
      position:"absolute",
      top:0,
      resizeMode:'cover',
    },

    whiteSheet:{
        width:'100%',
        height:'75%',
        position:"absolute",
      bottom:0,
      backgroundColor:'#fff',
      borderTopLeftRadius:60,
    },

    form:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:30,  
    },

    button:{
        backgroundColor:'#f57c00',
        height:58,
        borderTopLeftRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
       

    },


    

}]
