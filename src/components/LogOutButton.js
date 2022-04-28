import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import images from "../themes/images";
import Icon from 'react-native-vector-icons/FontAwesome'

const screenWIdth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const LogOutButton = ({ imgPath, name, logOut}) => {
    return (
        <TouchableOpacity style={styles.bigView}
        onPress={()=>logOut()}>
            <View style={styles.iconView}>
            <Icon style={{alignSelf:"center"}} name="sign-out" size={20} color={"black"} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Log Out</Text>
            </View>
            <View style={styles.arrowView}>
               
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bigView: {
        backgroundColor: "white",
        height: screenWIdth * 0.12,
        width: screenWIdth * 0.8,
        alignSelf: "center",
        borderRadius: 5,
        flexDirection: "row",
        padding: 10
    },
    text: {

        paddingLeft: 15,
        color: "black",
        fontSize: 18
    },
    icon: {
        alignSelf: "center",
        height: screenHeight * 0.04
    },
    arrow: {
        alignSelf: "center"
    },
    textView: {
        flex: 1,
        justifyContent: "center"
    },
    iconView: {
        flex: 0.2,
        justifyContent: "center"
    },
    arrowView: {
        flex: 0.2,
        justifyContent: "flex-end",
        flexDirection: "row"
    }
})
export default LogOutButton