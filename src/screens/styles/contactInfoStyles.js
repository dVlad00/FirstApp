import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    BigDaddy: {
        flex: 1,
        backgroundColor: "white",
       
    },
    topView: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal:25
        
    },
    imgView: {
        flex: 0.4,
        alignItems:"center",
        
    },
    componentsView: {
        flex: 1,
        justifyContent:"space-evenly",
        marginBottom:50
    },

    // In Top View //
    text: {
        marginRight: 150,
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    // Img View //
    img:{
        width:150,
        height:150,
        borderRadius:75
    },
})

export default styles