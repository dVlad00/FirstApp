import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button } from "react-native"
import styles from "./styles/signUpstyles";
import Box from "../components/Box"

import strings from "../themes/strings";
import BirthDate from "../components/BirthDate";
import { connect } from "react-redux";

const SignUpScreen = ({ navigation, registerUser, registerST }) => {
    const [name, setName] = useState("")
    const [busines, setBusines] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [birth, setBirth] = useState("")

useEffect(()=>{
    if(registerST=== true){
        navigation.navigate("LogIn")
    }
},[registerST])

    const registerFunction = async () => {
        await registerUser(email, password, name, busines, phone, gender, birth)
        
    }

    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.textStyle}>
            <Text style={styles.headerText}>{strings.signUp.header}</Text>
            <Text style={styles.headerText}>{strings.signUp.header2}</Text>
            <Text style={styles.header2Text}>{strings.signUp.text}</Text>
            <Text style={styles.header2Text}>{strings.signUp.text2}</Text>
        </View>
        <View style={styles.boxesView}>
            <Box
                setUp={"Name"}
                setValue={setName}></Box>
            <Box
                setUp={"Business name"}
                setValue={setBusines}></Box>
            <Box
                setUp={"Phone"}
                setValue={setPhone}></Box>
            <Box
                setUp={"Email"}
                setValue={setEmail}></Box>
            <Box
                setUp={"Password"}
                setValue={setPassword}></Box>
            <Box
                setUp={"Gender"}
                setValue={setGender}></Box>
            <BirthDate
                setValue={setBirth}></BirthDate>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => registerFunction()}>
                <Text style={styles.buttonTextStyle}>{strings.signUp.register}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.alternativeView}>
            <TouchableOpacity
                style={styles.alternativeTextView}
                onPress={() => navigation.navigate("LogIn")}>
                <Text>{strings.signUp.alternative}</Text>
                <Text style={styles.alternativeTextText}> {strings.signUp.alternative2}</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const mapStateToProps = (state) => {
    const { registerST } = state.loginReducer;

    return { registerST };
}
const mapDispatchToProps = (dispatch) => ({
    registerUser: (email, password, name, busines, phone, gender, birth) => dispatch({ type: "ISLOGIN", payload: { email: email, password: password, name: name, busines: busines, phone: phone, gender: gender, birth: birth } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)


