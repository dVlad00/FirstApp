import React from "react";
import { View, Text, Dimensions, Image,TouchableOpacity } from "react-native"
import Box from "../components/Box"
import styles from "./styles/logInScreenStyles";

const LogInScreen = ({ navigation }) => {

    return <View style={{ flex: 1, backgroundColor: "white" }}>

        <View style={styles.textView}>
            <Text style={styles.headerText}>Lets Sign you in</Text>
            <Text style={styles.h2Text}>Welcome Back,</Text>
            <Text style={styles.h2Text}>You have been missed</Text>
        </View>
        <View style={styles.boxesView}>
            <Box setUp={"Email,phone & username"}></Box>
            <Box setUp={"Password"}
                password={true}></Box>
            <TouchableOpacity
                style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.SignInButton}>
                <Text style={styles.SignInText}>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.orView}>
            <View style={styles.orBar}></View>
            <View style={styles.orText}>
                <Text style={styles.orText2}>or</Text>
            </View>
            <View style={styles.orBar}></View>
        </View>
        <View style={styles.socialView}>
            <Image
                style={styles.google}
                source={require("../img/Google.png")}>
            </Image>
            <Image
                style={styles.facebook}
                source={require("../img/Facebook.png")}>
            </Image>
            <Image
                style={styles.apple}
                source={require("../img/Apple.png")}>
            </Image>
        </View>
        <View style={styles.buttonToRegisterView}>
            <TouchableOpacity
                style={styles.lastText}
                onPress={() => navigation.navigate("SignUp")}>
                <Text>Don`t have and Account?</Text>
                <Text style={styles.RegisterNow}> Register Now!</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default LogInScreen