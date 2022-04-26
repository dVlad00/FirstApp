import { StyleSheet, Dimensions } from "react-native";

const screenWIdth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    textView: {
        flex: 1.5,
        borderTopColor: "white",
        margin: 15
    },
    boxesView: {
        flex: 3,
        justifyContent: "space-evenly",

    },
    orView: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: screenWIdth * 0.09
    },
    socialView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: screenWIdth * 0.35,

    },
    buttonToRegisterView: {
        flex: 2,
        alignItems: "center"
    },
    ////
    headerText: {
        fontSize: screenHeight * 0.06,
        fontWeight: "bold",
        color: "black",
        flex: 2,
        fontFamily: "Raleway",

    },
    h2Text: {
        fontSize: screenHeight * 0.035,
        fontWeight: "bold",
        color: "black",
        flex: 1,
        fontFamily: "Raleway",

    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginRight: 20
    },
    forgotPasswordText: {
        color: "black"
    },
    SignInButton: {
        backgroundColor: "black",
        width: screenWIdth * 0.9,
        height: screenHeight * 0.07,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 25
    },
    SignInText: {
        color: "white",
        alignSelf: "center"
    },
    orBar: {
        borderBottomWidth: 2,
        borderColor: "grey",
        flex: 1
    },
    orText: {
        justifyContent: "flex-end",
        fontWeight: "bold",
        color: "black",
        flex: 0.3,
    },
    orText2: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },
    lastText: {
        flexDirection: "row",
        marginHorizontal: screenWIdth * 0.1,

    },
    RegisterNow: {

        fontWeight: "bold",
        fontSize: 15,
        color: "black"
    }

})

export default styles