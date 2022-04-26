import React from "react";
import { ImageBackground, StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const widthOfButton= windowWidth*0.3

const Card = ({ path,firstText,secondText }) => {
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

const styles = StyleSheet.create({
    bigView: {
        flex: 1,
        marginRight:30
    },
    button: {
        width:widthOfButton
    },
    img: {
        height: widthOfButton*1.2686567164179104477611940298507,
        width:widthOfButton ,
        borderRadius: 2,

    },
    text1:{
        color:"white",
        fontSize:19,
        height:22
    },
    text2:{
        color:"white",
        fontSize:12,
        height:13,
        
    },
    textView:{
        paddingLeft:10,
        paddingTop:4
    }
})

export default Card