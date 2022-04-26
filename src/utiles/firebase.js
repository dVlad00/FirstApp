import React from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from "@react-native-firebase/auth"
import { firebase } from '@react-native-firebase/firestore'

const createAccount = async (email, password, name, phone, busines) => {
    await auth().createUserWithEmailAndPassword(email, password).then(() => { registerUser(name, phone, busines, email) })
}

const registerUser = async (name, busines, phone, email) => {
    await firestore().collection('users').add({
        name: name,
        businesName: busines,
        phone: phone,
        email: email

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



