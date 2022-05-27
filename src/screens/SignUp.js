import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import styles from "./styles/signUpstyles";
import Box from "../components/Box"
import strings from "../themes/strings";
import BirthDate from "../components/BirthDate";
import { connect } from "react-redux";

const SignUpScreen = ({ navigation, registerUser, registerST }) => {
    const [userDetails, setUserDetails] = useState({ name: null, busines: null, phone: null, email: null, password: null, gender: null, birth: null })

    const BoxArry = [{
        id: 0,
        setUp: "Name",
        setValue: (value) => setUserDetails((prevState) => ({ ...prevState, name: value }))
    },
    {
        id: 1,
        setUp: "Busines Name",
        setValue: (value) => setUserDetails((prevState) => ({ ...prevState, busines: value }))
    },
    {
        id: 2,
        setUp: "Phone",
        setValue: (value) => setUserDetails((prevState) => ({ ...prevState, phone: value }))
    },
    {
        id: 3,
        setUp: "Email",
        setValue: (value) => setUserDetails((prevState) => ({ ...prevState, email: value }))
    },
    {
        id: 4,
        setUp: "Password",
        setValue: (value) => setUserDetails((prevState) => ({ ...prevState, password: value }))
    },
    {
        id: 5,
        setUp: "Gender",
        setValue: (value) => setUserDetails((prevState) => ({ ...prevState, gender: value }))
    },
    ]


    useEffect(() => {
        if (registerST === true) {
            navigation.navigate("LogIn")
        }
    }, [registerST])

    const registerFunction = async () => {
        await registerUser(
            userDetails.email,
            userDetails.password,
            userDetails.name,
            userDetails.busines,
            userDetails.phone,
            userDetails.gender,
            userDetails.birth)
    }

    return <View style={styles.container}>
        <View style={styles.textStyle}>
            <Text style={styles.headerText}>{strings.signUp.header}</Text>
            <Text style={styles.headerText}>{strings.signUp.header2}</Text>
            <Text style={styles.header2Text}>{strings.signUp.text}</Text>
            <Text style={styles.header2Text}>{strings.signUp.text2}</Text>
        </View>
        <View style={styles.boxesView}>

            {BoxArry.map(box => <Box index={box.id} setUp={box.setUp} setValue={box.setValue} />)}
            <BirthDate
                setValue={(value) => setUserDetails((prevState) => ({ ...prevState, birth: value }))} />
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


