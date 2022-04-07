import React from "react";
import{View} from "react-native"
import {Text} from "react-native-elements"
import Box from "../components/Box"
import styles from "./styles/logInScreenStyles";

const LogInScreen=()=>{
    return <View style={{flex:1}}>
        
        <View style={styles.textView}>
            <Text h1>Lets Sign you in</Text>
            <Text h4>Welcome Back,</Text>
            <Text h4>You have been missed</Text>        
        </View>
        <View style={styles.boxesView}>
            <Box></Box>
        </View>
        <View style={styles.orView}></View>
        <View style={styles.socialView}></View>
        <View style={styles.buttonToRegisterView}></View>
    </View>
}

export default LogInScreen