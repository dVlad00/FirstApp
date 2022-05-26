import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles/logOutButtonStyles";

const LogOutButton = ({ logOut }) => {
    return (
        <TouchableOpacity style={styles.bigView}
            onPress={() => logOut()}>
            <View style={styles.iconView}>
                <Icon style={{ alignSelf: "center" }} name="sign-out" size={20} color={"black"} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Log Out</Text>
            </View>
            <View style={styles.arrowView} />
        </TouchableOpacity>
    )
}

export default LogOutButton