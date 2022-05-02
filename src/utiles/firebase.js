import React from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from "@react-native-firebase/auth"
import { firebase } from '@react-native-firebase/firestore'

const createAccount = async (email, password, name,busines, phone,gender,birth) => {
    await auth().createUserWithEmailAndPassword(email, password).then(() => { registerUser(name, busines, phone,email,gender,birth) })
}

const registerUser = async (name, busines, phone, email,gender,birth) => {
    await firestore().collection('users').add({
        name: name,
        businesName: busines,
        phone: phone,
        email: email,
        gender:gender,
        birth:birth

    })
}

const userDetails = async (userMail) => {
    let user
    const users =  await firestore()
        .collection('users')
        .where("email", "==", userMail)
        .get()
        .then(response => {
             response.forEach(res => {
                user =res.data()
            })
            return user
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



export { createAccount, registerUser, logIn, userDetails }



