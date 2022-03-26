import React, { useState } from "react"
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native"
import styles from "./styles/defaultScreenStyles"
import Carousel from 'react-native-snap-carousel';




const DefaultScreen = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const img = [
        {
            title: "Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae, dictum justo, iaculis id. Cras a ac augue netus egestas semper varius facilisis id. ",
        }, {
            title: "Hello2",
        }, {
            title: "Hello3"
        }, {
            title: "Hello4",
        }
    ]
    const renderItem = ({ item, index }) => {
        return <View style={styles.renderView}>
            <Text></Text>  
            <Text></Text> 
            <Text style={styles.carrouselText}>{item.title}</Text>
            {/* <Text>{data.carrouselItem.text}</Text> */}
        </View>
    }



    return <View style={styles.allScreenView}>
        <View style={styles.space}></View>
        <View style={styles.imgView}>
            <Image style={styles.img} source={require("../img/photo.png")} />
        </View>
        <View style={styles.carrouselView}>
            <Carousel
                contentContainerStyle={styles.carrousel}
                style={styles.carrousel}
                ref={null}
                data={img}
                renderItem={renderItem}
                sliderWidth={windowWidth}
                itemWidth={0.9 * windowWidth}
            ></Carousel>
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

