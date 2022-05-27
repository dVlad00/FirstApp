import { StyleSheet } from "react-native"
import { screenHeight } from "../../utils/constants";

const imgSize = screenHeight * 0.08

const styles = StyleSheet.create({
    bigView: {
        flexDirection: "row",
        flex: 1,
        margin: 3
    },
    textView: {
        flex: 4
    },
    imgView: {
        flex: 2
    },
    titleText: {
        fontWeight: "bold",
        fontSize: screenHeight * 0.023,
        color: "#4F4F4F"
    },
    contentText: {
        fontSize: screenHeight * 0.016,
        color: "#4F4F4F",
        textAlign: "justify"

    }, img: {
        height: imgSize,
        width: imgSize,
        alignSelf: "center"
    }
})

export default styles