import React from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles/contactInfoStyles";
import images from "../themes/images"
import InfoChange from "../components/InfoChange";
import { connect } from "react-redux";

const ContactInfo = ({user}) => {
    return <View style={styles.BigDaddy}>
        <View style={styles.topView}>
            <Image source={images.vector}></Image>
            <Text style={styles.text}>Contact Info</Text>
        </View>
        <View style={styles.imgView}>
            <Image style={styles.img} source={images.profile}></Image>
        </View>
        <View style={styles.componentsView}>
            <InfoChange
                name={"Name"}
                context={user != null ? user.name: "" }></InfoChange>
            <InfoChange
                name={"Birthdate"}
                context={user != null ? user.birth: "" }></InfoChange>
            <InfoChange
                name={"Gender"}
                context={user != null ? user.gender: "" }></InfoChange>
            <InfoChange
                name={"Email"}
                context={user != null ? user.email: "" }></InfoChange>
        </View>
    </View>
}

const mapStateToProps = (state) => {
    const {  user } = state.loginReducer;

    return {  user };
}


export default connect(mapStateToProps)(ContactInfo)

