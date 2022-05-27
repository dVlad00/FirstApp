import { put, takeLatest, call } from "@redux-saga/core/effects";
import { logIn, userDetails, createAccount } from "../../utils/firebase";
import {LOGIN,UID,ERROR,LOGOUT,LOGOUTFROMPROFILE,GETUSER,USERDETAILS,ISLOGIN,SETTRUE}from "../reduxTypes"

const signIn = (email, password) => {
    return logIn(email, password)
}

const register = (email, password, name, busines, phone, gender, birth) => {
    return createAccount(email, password, name, busines, phone, gender, birth)
}

const userDet = (uid) => {
    return userDetails(uid)
}

function* registerUser(actions) {
    try {
        const regUser = yield call(
            register,
            actions.payload.email,
            actions.payload.password,
            actions.payload.name,
            actions.payload.busines,
            actions.payload.phone,
            actions.payload.gender,
            actions.payload.birth
        )
        if (regUser) {
            yield put({ type: SETTRUE, payload: { registerST: regUser } })
        }
    } catch (error) {
        console.log("error Actions", error)
    }

}

function* getUser(actions) {
    try {
        const user = yield call(
            userDet,
            actions.payload.uid
        );

        yield put({ type: USERDETAILS, payload: { details: user } });

    } catch (error) { console.log("eroare Actions", error) }
}

function* logoutRequest(actions) {
    try {
        yield put({ type: LOGOUTFROMPROFILE, payload: null });
    } catch (error) { console.log("eroare Actions", error) }
}

function* loginRequest(action) {
    try {
        const auth = yield call(
            signIn,
            action.payload.userEmail,
            action.payload.userPassword,
        );
        if (auth != undefined || details != undefined) {
            yield put({ type: UID, payload: { uid: auth.user.uid, email: auth.user.email } });
        } else yield put({ type: ERROR, payload: "ERROR" });
    } catch (error) { }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginRequest);
    yield takeLatest(LOGOUT, logoutRequest);
    yield takeLatest(GETUSER, getUser);
    yield takeLatest(ISLOGIN, registerUser)


}