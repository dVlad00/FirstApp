import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const imgSize = windowHeight * 0.19

const styles = StyleSheet.create({
    ScreenView: {
        flex: 1,
        backgroundColor: "#E9E9E9",

    },
    // View styles // 
    profileView: {
        flex: 1,
        justifyContent: "center",
        marginLeft:15
    },
    imgView: {
        flex: 3,
        backgroundColor: "blue"
    },
    buttonsView: {
        flex: 3,
        justifyContent:"space-evenly"
    },
    // profile Text // 
    profileText: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black"
    },
    //Img view // 
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
        justifyContent:"center"
    },
    NameText: {
        fontSize:windowHeight*0.025,
        color:"black",
        
    },
    JobName: {

    }
})

export default styles