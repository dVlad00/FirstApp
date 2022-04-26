import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles/profileScreenStyle";
import ProfileButton from "../components/ProfileButton";
import strings from "../themes/strings";
import images from "../themes/images";


const ProfileScreen = () => {
    return <View style={styles.ScreenView}>
        <View style={styles.profileView}>
            <Image
                source={images.vector}></Image>
            <Text style={styles.profileText}>{strings.profileScreen.profile}</Text>
        </View>
        <View style={styles.imgView}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={images.profile}></Image>
            </View>
            <View style={styles.textViews}>
                <Text style={styles.NameText}> {strings.profileScreen.name}</Text>
                <Text style={styles.JobName}> {strings.profileScreen.job}</Text>
            </View>
        </View>
        <View style={styles.buttonsView}>
            <ProfileButton
                imgPath={images.contact}
                name={"Contact Info"}></ProfileButton>
            <ProfileButton
                imgPath={images.funding}
                name={"Source of Funding Info"}></ProfileButton>
            <ProfileButton
                imgPath={images.bank}
                name={"Bank Account Info"}></ProfileButton>
            <ProfileButton
                imgPath={images.doc}
                name={"Document Info"}></ProfileButton>
            <ProfileButton
                imgPath={images.setting}
                name={"Settings"}></ProfileButton>
        </View>
    </View>
}

export default ProfileScreen