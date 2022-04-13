import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    SignIn: {
        width: "80%",
        height: "50%",
        backgroundColor: "black",
        alignSelf: "flex-end",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: "center",
    },
    SignUp: {
        width: "80%",
        height: "50%",
        backgroundColor: "#6969BF",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "center"
    },
    viewSignIn: {
        flex: 1,
        alignSelf: "center"
    },
    viewSignUp: {
        flex: 1,
        alignSelf: "center"
    },
    Text: {
        color: "white",
        alignSelf: "center",
    },
    carrouselView: {
        flex: 5,
        backgroundColor:"white",
        marginTop: 50
    },
    img: {
        flex: 3,
        alignSelf: "center"
    },
    inisdeRenderView: {
        flex: 1.2,
        backgroundColor: "white",
        marginBottom:20
    },
    buttonsView: {
        flex: 1,
        flexDirection: "row",
    },
    textView:{
        flex:1,
       paddingHorizontal:10
    },
    allScreenView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor:"white"
    }
    , carrousel: {
        flex:2,
        borderTopWidth: "10"
    },
    carrouselText: {
        alignSelf: "center",
        textAlign: "center"
    },
    renderView: {

        justifyContent: "center",
        flex: 1,
        alignItems:"center"
        
    }
})

export default styles