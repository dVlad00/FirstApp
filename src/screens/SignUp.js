import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, } from "react-native"
import styles from "./styles/signUpstyles";
import Box from "../components/Box"
import firestore from '@react-native-firebase/firestore'
import auth from "@react-native-firebase/auth"
import { createAccount, registerUser } from "../utiles/firebase"
import strings from "../themes/strings";
import images from "../themes/images";

const usersCollection = firestore().collection('users')


const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [busines, setBusines] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerFunction = () => {
        createAccount(email, password, name, busines, phone, email, password)
    }
    useEffect(() => {
        console.log(name)
    }, [name, busines, phone, email, password])


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

export default SignUpScreen