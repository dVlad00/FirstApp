import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import images from "../themes/images";

const screenWIdth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const ProfileButton = ({ imgPath, name }) => {
    return (
        <TouchableOpacity style={styles.bigView}>
            <View style={styles.iconView}>
                <Image
                    style={styles.icon}
                    source={imgPath}></Image>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.arrowView}>
                <Image style={styles.arrow} source={images.arrow}></Image>
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
export default ProfileButton