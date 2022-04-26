import {StyleSheet} from "react-native"

const styles=StyleSheet.create({
    bigView:{
        backgroundColor:"white",
        flex:1,
        
        alignItems:"center"
    },
    emoji:{
        fontSize:150,
        fontWeight:"bold",
        marginTop:100
       
    },
    button:{
       marginTop:100,
        width:350,
        height:80,
        backgroundColor:"blue",
    borderRadius:10,
    justifyContent:"center"
    },
    buttonText:{
        fontSize:30,
        color:"white",
        alignSelf:"center"
    }
})

export default styles