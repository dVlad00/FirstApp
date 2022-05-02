import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const InfoChange = ({ name, context }) => {
    return <View style={styles.BigView}>
        <Text>{name}</Text>
        <View style={styles.changeView}>
            <Text style={styles.insideText}>{context}</Text>
            <TouchableOpacity >
                <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    BigView: {
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        marginHorizontal: 25
    },
    changeView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    changeText: {
        color: "green",
    },
    insideText: {
        color: "black",
        fontSize: 17
    }
})

export default InfoChange



