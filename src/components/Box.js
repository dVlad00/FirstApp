import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";

const screenWIdth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const Box = ({setUp,password,setValue}) => {
    return <TextInput 
    style={styles.textInput}
    placeholder={setUp}
    placeholderTextColor="#242322"
    onChangeText={(text)=>setValue(text)}
    
    ></TextInput>
}

const styles = StyleSheet.create({
    boxView: {
        flex: 1,
        borderWidth: 2,
        borderColor: "blue",
        justifyContent: "center",
    },
    textInput: {
        alignSelf: "center",
        borderLeftWidth: screenWIdth * 0.005,
        borderRightWidth: screenWIdth * 0.005,
        borderTopWidth: screenHeight * 0.002,
        borderBottomWidth: screenHeight * 0.002,
        width: screenWIdth * 0.9,
        height: screenHeight * 0.07,
        borderRadius: 5,
        borderColor:"grey",
        paddingHorizontal:15,
        
    }
})

export default Box