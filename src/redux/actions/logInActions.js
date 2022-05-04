import { put, takeLatest, call } from "@redux-saga/core/effects";
import { logIn, userDetails } from "../../utiles/firebase";

const LOGIN = "LOGIN";
const UID = "UID"
const ERROR = "ERROR"
const LOGOUT = "LOGOUT"
const logO = "logO"
const GETUSER = "GETUSER"
const USERDETAILS = "USERDETAILS"

const signIn = (email, password) => {
    return logIn(email, password)
}


const userDet = (uid) => {
    return userDetails(uid)
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
        yield put({ type: logO, payload: null });
    } catch (error) { console.log("eroare Actions", error) }
}

function* loginRequest(action) {
    try {
        const auth = yield call(
            signIn,
            action.payload.userEmail,
            action.payload.userPassword,
        );
        // console.log("@@@@@!#!",auth)
        // const details = yield call(
        //     aboutUser,
        //     action.payload.userEmail
        // )
        if (auth != undefined || details != undefined) {
            yield put({ type: UID, payload: { uid: auth.user.uid, email: auth.user.email } });
        } else yield put({ type: ERROR, payload: "ERROR" });
    } catch (error) { }
}

export function* watchLogin() {
    yield takeLatest(LOGIN, loginRequest);
    yield takeLatest(LOGOUT, logoutRequest);
    yield takeLatest(GETUSER, getUser);


}