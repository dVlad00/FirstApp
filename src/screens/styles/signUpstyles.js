import { StyleSheet, Dimensions } from "react-native";

const screenWIdth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    textStyle: {
        marginHorizontal: 5,
        flex: 1.6,
        backgroundColor: "white",
        marginLeft:15,
        marginTop:5
    },
    boxesView: {
        backgroundColor: "white",
        flex: 4,
        justifyContent: "space-evenly"
    },
    buttonView: {
        backgroundColor: "white",
        flex: 0.8,
        justifyContent: "center",
    },
    alternativeView: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center"
    },
    // Text //
    headerText: {
        fontWeight: "bold",
        fontSize: screenHeight*0.06,
        color: "black",
    },
    header2Text: {
        fontSize: screenHeight*0.035,
        color: "black"
    },
    // Boxes //
    // Button//
    buttonStyle: {
        backgroundColor: "black",
        width: screenWIdth * 0.8,
        height: screenHeight * 0.07,
        alignSelf: "center",
        borderRadius: 5,
        justifyContent: "center",
        marginTop:10
    },
    buttonTextStyle: {
        color: "white",
        alignSelf: "center"
    },
    //Alternative//
    alternativeTextView: {
        flexDirection: "row",
        margin:15
    },
    alternativeTextText: {
        fontWeight: "bold",
        color: "black"
    }

})

export default styles