import React from "react";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import { changeDetails } from "../utils/firebase";
import styles from "./styles/InfoChangeModalStyles"

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

export default InfcoChangeModal