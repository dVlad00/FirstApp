import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles/contactInfoStyles";
import images from "../themes/images"
import InfoChange from "../components/InfoChange";
import { connect } from "react-redux";
import InfcoChangeModal from "../components/InfoChangeModal";
import { changeDetails } from "../utils/firebase";
import { launchCamera } from "react-native-image-picker"

const ContactInfo = ({ user, uid, getUser }) => {
    const [newName, setNewName] = useState("")
    const [modalTitile, setModalTitle] = useState("")
    const [context, setContext] = useState("")
    const [img, setImg] = useState("")

    const pickImage = async () => {
        const options = {
            noData: true,
            saveToPhotos: true
        }
        await launchCamera(options, result => setImg(result.assets[0].uri))
    }

    return <View style={styles.BigDaddy}>
        <View style={styles.topView}>
            <Image source={images.vector} />
            <Text style={styles.text}>Contact Info</Text>
        </View>
        <View style={styles.imgView}>
            <TouchableOpacity onPress={pickImage}>
                {img === "" ? <Image style={styles.img} source={images.profile}></Image> : <Image style={styles.img} source={{ uri: img }}></Image>}
            </TouchableOpacity>
        </View>
        <View style={styles.componentsView}>
            <InfoChange
                name={"Name"}
                context={user != null ? user.name : ""}
                modalTitle={setModalTitle}
                setContext={setContext} />
            <InfoChange
                name={"Birthdate"}
                context={user != null ? user.birth : ""}
                modalTitle={setModalTitle}
                setContext={setContext} />
            <InfoChange
                name={"Gender"}
                context={user != null ? user.gender : ""}
                modalTitle={setModalTitle}
                setContext={setContext} />
            <InfoChange
                name={"Phone"}
                context={user != null ? user.phone : ""}
                modalTitle={setModalTitle}
                setContext={setContext} />
            <InfoChange
                name={"Email"}
                context={user != null ? user.email : ""} />
            <InfcoChangeModal
                isVisible={modalTitile === "" ? false : true}
                button={setModalTitle}
                name={modalTitile}
                context={context}
                newValue={setNewName}
                uid={uid}
                value={newName}
                reduxGetUser={getUser} />
        </View>
    </View>
}

const mapStateToProps = (state) => {
    const { user, uid } = state.loginReducer;

    return { user, uid };
}

const mapDispatchToProps = (dispatch) => ({

    getUser: (uid) => dispatch({ type: "GETUSER", payload: { uid } })
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)

