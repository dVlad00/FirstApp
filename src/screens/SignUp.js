import React from "react";
import { Text, View, TouchableOpacity } from "react-native"
import styles from "./styles/signUpstyles";
import Box from "../components/Box"


const SignUpScreen = ({navigation}) => {
    return <View style={{ flex: 1,backgroundColor:"white" }}>
        <View style={styles.textStyle}>
            <Text style={styles.headerText}>Lets Register</Text>
            <Text style={styles.headerText}>Account</Text>
            <Text style={styles.header2Text}>Hello user, you have</Text>
            <Text style={styles.header2Text}>a greatful journey</Text>
        </View>
        <View style={styles.boxesView}>
            <Box
                setUp={"Name"}></Box>
            <Box
                setUp={"Business name"}></Box>
            <Box
                setUp={"Phone"}></Box>
            <Box
                setUp={"Email"}></Box>
            <Box
                setUp={"Password"}></Box>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Register</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.alternativeView}>
            <TouchableOpacity
                style={styles.alternativeTextView}
                onPress={()=>navigation.navigate("LogIn")}>
                <Text>Already have an Account?</Text>
                <Text style={styles.alternativeTextText}> Login!</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default SignUpScreen