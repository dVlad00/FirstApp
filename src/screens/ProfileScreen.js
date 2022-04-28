import React, { useEffect } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import styles from "./styles/profileScreenStyle";
import ProfileButton from "../components/ProfileButton";
import strings from "../themes/strings";
import images from "../themes/images";
import { connect } from "react-redux";
import { logIn } from "../utiles/firebase";
import LogOutButton from "../components/LogOutButton";

const ProfileScreen = ({ logout, user, navigation }) => {
    useEffect(() => {
        if (user == null) {
            navigation.navigate("LogIn")
        }
    }, [user])

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
            <LogOutButton
                logOut={logout}
            ></LogOutButton>
        </View>
    </View>
}
const mapStateToProps = (state) => {
    const { uid, useremail, user } = state.loginReducer;
    return { uid, useremail, user };
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({ type: "LOGOUT", payload: null }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
