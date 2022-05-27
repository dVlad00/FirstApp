import React from "react";
import { TextInput } from "react-native";
import styles from "./styles/boxSyles";

const Box = ({ setUp, setValue }) => {
    const changeText = (text) => { setValue(text) }
    return <TextInput
        style={styles.textInput}
        placeholder={setUp}
        placeholderTextColor="#242322"
        onChangeText={changeText}
    />
}

export default Box