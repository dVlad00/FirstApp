import { StyleSheet } from "react-native";
import { screenHeight, imgSize } from "../../utils/constants";

const styles = StyleSheet.create({
    ScreenView: {
        flex: 1,
        backgroundColor: "#E9E9E9",
    },

    profileView: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 15
    },
    imgView: {
        flex: 3,
        backgroundColor: "blue"
    },
    buttonsView: {
        flex: 3,
        justifyContent: "space-evenly"
    },

    profileText: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    imgView: {
        flex: 2,
    },
    img: {
        height: imgSize,
        width: imgSize,
        alignSelf: "center"
    },
    textViews: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center"
    },
    NameText: {
        fontSize: screenHeight * 0.025,
        color: "black",
    },
    JobName: {
    }
})

export default styles