import { StyleSheet } from "react-native";
import { screenWidth,screenHeight } from "../../utils/constants";

const styles = StyleSheet.create({
    bigView: {
        backgroundColor: "white",
        height: screenWidth * 0.12,
        width: screenWidth * 0.8,
        alignSelf: "center",
        borderRadius: 5,
        flexDirection: "row",
        padding: 10
    },
    text: {

        paddingLeft: 15,
        color: "black",
        fontSize: 18
    },
    icon: {
        alignSelf: "center",
        height: screenHeight * 0.04
    },
    arrow: {
        alignSelf: "center"
    },
    textView: {
        flex: 1,
        justifyContent: "center"
    },
    iconView: {
        flex: 0.2,
        justifyContent: "center"
    },
    arrowView: {
        flex: 0.2,
        justifyContent: "flex-end",
        flexDirection: "row"
    }
})

export default styles