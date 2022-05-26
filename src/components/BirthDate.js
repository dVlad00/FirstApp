import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker'
import styles from "./styles/birthDateStyles";


const BirthDate = ({ setValue }) => {
    const [date, setDate] = useState(new Date())
    const [selectData, setSelectData] = useState("YYYY/MM/DD")
    const [open, setOpen] = useState(false)
    const data = JSON.stringify(date).slice(1, 11)

    return <View style={styles.textInput}>
        <Text style={styles.text}>Birth Date</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => setOpen(true)}>
            <Text style={styles.data}>{selectData}</Text>
        </TouchableOpacity>

        <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                setValue(data)
                setSelectData(data)
            }}
            onCancel={() => {
                setOpen(false)
            }}
        />

    </View>
}



export default BirthDate