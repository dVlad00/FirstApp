import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import EmojiPicker from "rn-emoji-keyboard"
import styles from "./styles/emojiScreenStyle";

const EmojiScreen = () => {
    const [result, setResult] = useState()
    const [isModalopen, setIsModalopen] = useState(false)

    const handlePick = (emoji) => {
        console.log(emoji)
        setResult(emoji.emoji)
        setIsModalopen((prev) => !prev)
    }

    return (
        <View style={styles.bigView}>
            <Text style={styles.emoji}>{result}</Text>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=> setIsModalopen(true)}>
                <Text style={styles.buttonText}>Pick Emoji</Text>
            </TouchableOpacity>

            <EmojiPicker
            style={styles.emoji}
            onEmojiSelected={handlePick}
            open={isModalopen}
            onClose={()=>{setIsModalopen(false)}}
            ></EmojiPicker>
        </View>
    )

}

export default EmojiScreen