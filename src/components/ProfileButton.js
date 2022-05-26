import React from "react";
import { View, Text, Image, TouchableOpacity, } from "react-native";
import images from "../themes/images";
import styles from "./styles/profileButtonStyles";

const ProfileButton = ({ imgPath, name }) => {
    return (
        <TouchableOpacity style={styles.bigView}>
            <View style={styles.iconView}>
                <Image
                    style={styles.icon}
                    source={imgPath} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.arrowView}>
                <Image style={styles.arrow} source={images.arrow}/>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileButton