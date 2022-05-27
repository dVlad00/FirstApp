
import firestore from '@react-native-firebase/firestore'
import auth from "@react-native-firebase/auth"
import { firebase } from '@react-native-firebase/firestore'

const createAccount = async (email, password, name, busines, phone, gender, birth) => {
    return await auth().createUserWithEmailAndPassword(email, password).then((temp) => { return registerUser(name, busines, phone, email, gender, birth, temp.user.uid) })
}
const registerUser = async (name, busines, phone, email, gender, birth, docUID) => {
    return await firestore().collection('users').doc(docUID).set({
        name: name,
        businesName: busines,
        phone: phone,
        email: email,
        gender: gender,
        birth: birth
    }).then(() => { return true })

}

const changeDetails = async (uid, whatToChange, changedValue) => {
    await firestore()
        .collection('users')
        .doc(uid)
        .update({
            [whatToChange]: changedValue,
        })
}

const userDetails = async (uid) => {
    const users = await firestore()
        .collection('users')
        .doc(uid)
        .get()
        .then(response => {
            return response.data()
        })

    return users
}

const logIn = async (email, password) => {
    let status
    const result = await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            return res
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.code.message)
            status = false
        })

    return result
}

export { createAccount, registerUser, logIn, userDetails, changeDetails }



