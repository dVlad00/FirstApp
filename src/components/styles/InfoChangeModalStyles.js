import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    bigView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    button: {
        height: 2,
        width: 155,
        marginHorizontal: 30,
        backgroundColor: "black",
        margin: 5,
        flex: 1,
        justifyContent: "center"
    },
    modal: {
        height: 160,
        width: 260,
        backgroundColor: "white",
        alignSelf: "center",
        padding: 20,
        justifyContent: "space-between",
        borderRadius: 20
    },
    text: {
        color: "white",
        alignSelf: "center"
    },
    TextInput: {
        flex: 0.34,
        borderWidth: 2,
        borderColor: "black",
        margin: 5,
        justifyContent: "center"
    },
    title: {
        flex: 0.5,
        marginBottom: 4,
        marginLeft: 5
    }
})

export default styles