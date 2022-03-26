import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    SignIn: {
        width: "50%",
        height: "50%",
        backgroundColor: "black",
        alignSelf: "center",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: "center"
    },
    SignUp: {
        width: "50%",
        height: "50%",
        backgroundColor: "blue",
        alignSelf: "center",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center"
    },
    Text: {
        color: "white",
        alignSelf: "center",
    },
    space: {
        flex: 2,
        backgroundColor: 'white'
    },
    imgView: {
        backgroundColor: "red",
        flex: 4
    },
    carrouselView: {
        flex: 3,
        
       
    },
    buttonsView: {
        flexDirection: "row",
        flex: 2
    },
    allScreenView: {
        flex: 1,
        flexDirection: "column"
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: 'stretch'
    },
    viewSignIn: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row"


    },
    viewRegister: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row"
    },carrousel:{
        borderTopWidth:"10"
    },
    carrouselText:{
        alignSelf:"center",
        textAlign:"center"
    },
    renderView:{
        alignItems:"center",
        justifyContent:"center"
    }
})

export default styles