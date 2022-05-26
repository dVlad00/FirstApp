import { StyleSheet} from "react-native";
import {screenWidth} from "../../utils/constants.js"

const widthOfButton= screenWidth*0.3

const styles = StyleSheet.create({
    bigView: {
        flex: 1,
        marginRight:30
    },
    button: {
        width:widthOfButton
    },
    img: {
        height: widthOfButton*1.2686567164179104477611940298507,
        width:widthOfButton ,
        borderRadius: 2,

    },
    text1:{
        color:"white",
        fontSize:19,
        height:22
    },
    text2:{
        color:"white",
        fontSize:12,
        height:13,
        
    },
    textView:{
        paddingLeft:10,
        paddingTop:4
    }
})

export default styles