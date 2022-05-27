import React, { useEffect } from "react";
import { Text, View, Image, } from "react-native";
import styles from "./styles/profileScreenStyle";
import ProfileButton from "../components/ProfileButton";
import strings from "../themes/strings";
import images from "../themes/images";
import { connect } from "react-redux";
import LogOutButton from "../components/LogOutButton";

const ProfileScreen = ({ logout, user, uid, navigation }) => {
    useEffect(() => {
        if (uid == null) {
            navigation.navigate("LogIn")
        }
    }, [uid])

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
                <Text style={styles.NameText}> {user === null ? "" : user.name}</Text>
                <Text style={styles.JobName}> {strings.profileScreen.job}</Text>
            </View>
        </View>
        <View style={styles.buttonsView}>
            <ProfileButton
                imgPath={images.contact}
                name={"Contact Info"} />
            <ProfileButton
                imgPath={images.funding}
                name={"Source of Funding Info"} />
            <ProfileButton
                imgPath={images.bank}
                name={"Bank Account Info"} />
            <ProfileButton
                imgPath={images.doc}
                name={"Document Info"} />
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
