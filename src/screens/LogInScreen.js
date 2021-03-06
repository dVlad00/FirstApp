import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import Box from "../components/Box"
import styles from "./styles/logInScreenStyles";
import SocialMediaButton from "../components/SocialButton";
import images from "../themes/images";
import strings from "../themes/strings";
import { connect } from "react-redux";

const LogInScreen = ({ navigation, uid, login, getUser }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (uid != null) {
            getUser(uid)
            navigation.navigate("Bottom")
        }
    }, [uid])

    const functions = async () => {
        await login(email, password)
    }
    const toSignUp = () => {
        navigation.navigate("SignUp")
    }

    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.textView}>
            <Text style={styles.headerText}>{strings.logInScreen.title}</Text>
            <Text style={styles.h2Text}>{strings.logInScreen.welcome}</Text>
            <Text style={styles.h2Text}>{strings.logInScreen.missed}</Text>
        </View>
        <View style={styles.boxesView}>
            <Box
                setUp={"Email,phone & username"}
                setValue={setEmail} />
            <Box
                setUp={"Password"}
                setValue={setPassword} />
            <TouchableOpacity
                style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>{strings.logInScreen.forgotP}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.SignInButton}
                onPress={() => functions()}>
                <Text style={styles.SignInText}>{strings.defaultScreen.SignIn}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.orView}>
            <View style={styles.orBar} />
            <View style={styles.orText}>
                <Text style={styles.orText2}>or</Text>
            </View>
            <View style={styles.orBar} />
        </View>
        <View style={styles.socialView}>
            <SocialMediaButton
                imgSource={images.google} />
            <SocialMediaButton
                imgSource={images.facebook} />
            <SocialMediaButton
                imgSource={images.apple} />
        </View>
        <View style={styles.buttonToRegisterView}>
            <TouchableOpacity
                style={styles.lastText}
                onPress={toSignUp}>
                <Text>{strings.logInScreen.dont}</Text>
                <Text style={styles.RegisterNow}> {strings.logInScreen.register}</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const mapStateToProps = (state) => {
    const { uid, useremail, user } = state.loginReducer;

    return { uid, useremail, user };
}
const mapDispatchToProps = (dispatch) => ({

    login: (userEmail, userPassword) => dispatch({ type: "LOGIN", payload: { userEmail, userPassword } }),
    getUser: (uid) => dispatch({ type: "GETUSER", payload: { uid } })
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen)
