import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const imgSize=windowHeight*0.08

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

const styles = StyleSheet.create({

    bigView: {
        flexDirection: "row",
        flex: 1,
        margin: 3
    },
    textView: {
        flex: 4
    },
    imgView: {
        flex: 2
    },
    titleText: {
        fontWeight: "bold",
        fontSize: windowHeight*0.023,
        color: "#4F4F4F"
    },
    contentText: {
        fontSize: windowHeight*0.016,
        color: "#4F4F4F",
        textAlign: "justify"

    }, img: {
        height: imgSize,
        width: imgSize,
        alignSelf: "center"
    }

})

export default News