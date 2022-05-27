import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../utils/constants";

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 5,
        flex: 1.6,
        backgroundColor: "white",
        marginLeft: 15,
        marginTop: 5
    },
    boxesView: {
        backgroundColor: "white",
        flex: 4,
        justifyContent: "space-evenly"
    },
    buttonView: {
        backgroundColor: "white",
        flex: 0.7,
        justifyContent: "center",
    },
    alternativeView: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center"
    },
    container: {
        flex: 1, backgroundColor: "white"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: screenHeight * 0.06,
        color: "black",
    },
    header2Text: {
        fontSize: screenHeight * 0.035,
        color: "black"
    },
    buttonStyle: {
        backgroundColor: "black",
        width: screenWidth * 0.8,
        height: screenHeight * 0.07,
        alignSelf: "center",
        borderRadius: 5,
        justifyContent: "center",
        marginTop: 10
    },
    buttonTextStyle: {
        color: "white",
        alignSelf: "center"
    },
    alternativeTextView: {
        flexDirection: "row",
        margin: 15
    },
    alternativeTextText: {
        fontWeight: "bold",
        color: "black"
    }
})

export default styles