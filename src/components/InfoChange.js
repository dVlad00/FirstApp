import React from "react";
import { View, Text, TouchableOpacity } from "react-native"
import styles from "./styles/infoChangeStyles";

const InfoChange = ({ name, context, modalTitle, setContext }) => {

    return <View style={styles.BigView}>
        <Text>{name}</Text>
        <View style={styles.changeView}>
            <Text style={styles.insideText}>{context}</Text>
            {name === "Email" ? null :
                <TouchableOpacity onPress={() => {
                    modalTitle(name)
                    setContext(context)
                }} >
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>}
        </View>
    </View>
}

export default InfoChange



