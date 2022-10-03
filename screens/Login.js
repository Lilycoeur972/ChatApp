import React ,{useState} from "react";
import { StyleSheet,Text,View,Button,Image,SafeAreaView,TouchableOpacity} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import{auth} from"./config/firebase";
const backgroundColor =require("../assets/backImage.png");