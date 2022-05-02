import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Dimensions, Button, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-date-picker'


const screenWIdth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const BirthDate = ({ setUp, password, setValue }) => {
    const [date, setDate] = useState(new Date())
    const [selectData, setSelectData] = useState("YYYY/MM/DD")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const data = date
        const dataAleasa = JSON.stringify(data).slice(0, 11)
        console.log("@@@ aici", dataAleasa)
    }, [date])

    return <View style={styles.textInput}>
        <Text style={styles.text}>Birth Date</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={(lol) => setOpen(true)}>
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
                const data=JSON.stringify(date).slice(1, 11)
                setValue(data)
                setSelectData(data)
            }}
            onCancel={() => {
                setOpen(false)
            }}
        />

    </View>
}

const styles = StyleSheet.create({
    boxView: {
        flex: 1,
        borderWidth: 2,
        borderColor: "blue",
        justifyContent: "center",
    },
    textInput: {
        alignSelf: "center",
        borderLeftWidth: screenWIdth * 0.005,
        borderRightWidth: screenWIdth * 0.005,
        borderTopWidth: screenHeight * 0.002,
        borderBottomWidth: screenHeight * 0.002,
        width: screenWIdth * 0.9,
        height: screenHeight * 0.07,
        borderRadius: 5,
        borderColor: "grey",
        paddingHorizontal: 15,
        flexDirection: "row",

    },
    text: {
        alignSelf: "center",
        color: "black",
        flex: 1
    },
    data: {
        color: "black",
        alignSelf:"center"
    },
    button: {
        flex: 2,
        justifyContent:"center"

    }
})

export default BirthDate