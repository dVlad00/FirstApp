import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    BigView: {
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        marginHorizontal: 25
    },
    changeView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    changeText: {
        color: "green",
    },
    insideText: {
        color: "black",
        fontSize: 17
    }
})

export default styles