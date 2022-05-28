import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles/contactInfoStyles";
import images from "../themes/images"
import InfoChange from "../components/InfoChange";
import { connect } from "react-redux";
import InfcoChangeModal from "../components/InfoChangeModal";
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

    const InfoDetails = [
        {
            key: 4,
            name: "Email",
            context: user != null ? user.email : "",

        },
        {
            key: 0,
            name: "Name",
            context: user != null ? user.name : "",
            modalTile: setModalTitle,
            setContext: setContext
        },
        {
            key: 1,
            name: "Birthdate",
            context: user != null ? user.birth : "",
            modalTile: setModalTitle,
            setContext: setContext

        },
        {
            key: 2,
            name: "Gender",
            context: user != null ? user.gender : "",
            modalTile: setModalTitle,
            setContext: setContext
        },
        {
            key: 3,
            name: "Phone",
            context: user != null ? user.phone : "",
            modalTile: setModalTitle,
            setContext: setContext
        },

    ]

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
            {InfoDetails.map(
                component => {
                    return <InfoChange

                        name={component.name}
                        context={component.context}
                        modalTitle={component.modalTile}
                        setContext={component.setContext} />
                })}
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

