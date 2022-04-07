import React from "react";
import { View, StyleSheet,Text } from "react-native";

const Box = () => {
    return <View style={styles.boxView}>
        <View ><Text>hello</Text></View>
    </View>
}

const styles = StyleSheet.create({
   boxView:{
       flex:1,
       borderColor:"black",
       borderWidth:1
   }
})

export default Box