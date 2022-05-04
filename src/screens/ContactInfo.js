import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native"
import styles from "./styles/contactInfoStyles";
import images from "../themes/images"
import InfoChange from "../components/InfoChange";
import { connect } from "react-redux";
import InfcoChangeModal from "../components/InfoChangeModal";
import { changeDetails } from "../utiles/firebase";

const ContactInfo = ({ user, uid, getUser }) => {
    const [isModalOn, setModalOn] = useState(false)
    const [newName, setNewName] = useState("")
    const [newBirthDate, setNewBirthdate] = useState("")
    const [modalTitile, setModalTitle] = useState("")
    const [context, setContext] = useState("")



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
                context={user != null ? user.name : ""}
                modalTitle={setModalTitle}
                setContext={setContext}></InfoChange>
            <InfoChange
                name={"Birthdate"}
                context={user != null ? user.birth : ""}
                modalTitle={setModalTitle}
                setContext={setContext}></InfoChange>
            <InfoChange
                name={"Gender"}
                context={user != null ? user.gender : ""}
                modalTitle={setModalTitle}
                setContext={setContext}></InfoChange>
            <InfoChange
                name={"Phone"}
                context={user != null ? user.phone : ""}
                modalTitle={setModalTitle}
                setContext={setContext}></InfoChange>
            <InfoChange
                name={"Email"}
                context={user != null ? user.email : ""}>
            </InfoChange>
            <InfcoChangeModal
                isVisible={modalTitile === "" ? false : true}
                button={setModalTitle}
                name={modalTitile}
                context={context}
                newValue={setNewName}
                uid={uid}
                value={newName}
                reduxGetUser={getUser}
            ></InfcoChangeModal>
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

