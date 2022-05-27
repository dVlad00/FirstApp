import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../utils/constants.js"

const styles = StyleSheet.create({
    boxView: {
        flex: 1,
        borderWidth: 2,
        borderColor: "blue",
        justifyContent: "center",
    },
    textInput: {
        alignSelf: "center",
        borderLeftWidth: screenWidth * 0.005,
        borderRightWidth: screenWidth * 0.005,
        borderTopWidth: screenHeight * 0.002,
        borderBottomWidth: screenHeight * 0.002,
        width: screenWidth * 0.9,
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
        alignSelf: "center"
    },
    button: {
        flex: 2,
        justifyContent: "center"

    }
})
export default styles