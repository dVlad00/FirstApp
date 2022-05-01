import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, Modal } from "react-native"
import EmojiPicker from "rn-emoji-keyboard"
import styles from "./styles/emojiScreenStyle";




const EmojiScreen = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <View style={styles.bigView}>
            
            <DatePicker mode="date" date={date} onDateChange={setDate} />
        </View>
    )

}

export default EmojiScreen