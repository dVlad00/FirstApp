import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles/cardsStyles";

const Card = ({ path, firstText, secondText }) => {
    return <View style={styles.bigView} >
        <TouchableOpacity style={styles.button} >
            <ImageBackground
                resizeMod={"stetch"}
                style={styles.img} source={path}>
                <View style={styles.textView}>
                    <Text style={styles.text1}>{firstText}</Text>
                    <Text style={styles.text2}>{secondText}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    </View>
}

export default Card