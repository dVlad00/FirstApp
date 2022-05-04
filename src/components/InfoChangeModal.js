import React, { useState, useEffect } from "react";
import { View, Text, Modal, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { changeDetails } from "../utiles/firebase";

const InfcoChangeModal = ({ isVisible, button, name, context, newValue, uid, value, reduxGetUser }) => {


    return <Modal
        animationType="fade"
        visible={isVisible}
        transparent={true}>
        <View style={styles.bigView}>
            <View style={styles.modal}>
                <Text style={styles.title}>{name}</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder={context}
                    onChangeText={value => newValue(value)}></TextInput>
                <TouchableOpacity style={styles.button} title="Change" onPress={() => {
                    changeDetails(uid, name === "Name" ? "name" : name === "Birthdate" ? "birth" : name === "Gender" ? "gender" : name === "Phone" ? "phone" : null, value)
                    reduxGetUser(uid)
                    button("")
                }}><Text style={styles.text}>Change</Text></TouchableOpacity>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    bigView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    button: {
        height: 2,
        width: 155,
        marginHorizontal:30,
        backgroundColor: "black",
        margin:5,
        flex:1,
        justifyContent:"center"
    },
    modal: {
        height: 160,
        width: 260,
        backgroundColor: "white",
        alignSelf: "center",
        padding: 20,
        justifyContent:"space-between",
        borderRadius: 20
    },
    text: {
        color: "white",
        alignSelf:"center"
    },
    TextInput: {
        flex: 0.34,
        borderWidth: 2,
        borderColor: "black",
        margin:5,
        justifyContent:"center"
    },
    title: {
        flex: 0.5,
        marginBottom:4,
        marginLeft:5
    }
})

export default InfcoChangeModal