import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./styles/defaultScreenStyles"


const DefaultScreen = ({ navigation }) => {
    return <View style={styles.allScreenView}>
        <View style={styles.space}></View>
        <View style={styles.imgView}>
            <Image style={styles.img} source={require("../img/photo.png")} />
        </View>
        <View style={styles.carrouselView}>
       
        </View>
        <View style={styles.buttonsView}>
            <View style={styles.viewSignIn}>
                <TouchableOpacity style={styles.SignIn} onPress={() => navigation.navigate("LogIn")}>
                    <Text style={styles.Text}> Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewRegister}>
                <TouchableOpacity style={styles.SignUp} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.Text}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}



export default DefaultScreen

