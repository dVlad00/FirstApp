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

    const ButtonDetails = [
        {
            imgPath: images.contact,
            name: "Contact Info",
        },
        {
            imgPath: images.funding,
            name: "Source of Funding Info"
        },
        {
            imgPath: images.bank,
            name: "Bank Account Info"
        },
        {
            imgPath: images.doc,
            name: "Document Info"
        },
    ]

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
            {ButtonDetails.map(button => {
                return <ProfileButton
                    name={button.name}
                    imgPath={button.imgPath} />
            })}

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
