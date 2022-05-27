import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles/newsStyles";

const News = ({ NewsTitle, NewsContent, imgPath }) => {
    return < TouchableOpacity
        style={styles.bigView}>
        <View style={styles.textView}>
            <Text style={styles.titleText}>{NewsTitle}</Text>
            <Text style={styles.contentText}>{NewsContent}</Text>
        </View>
        <View style={styles.imgView}>
            <Image style={styles.img} source={imgPath}></Image>
        </View>
    </TouchableOpacity>
}

export default News