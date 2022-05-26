import { UID, ERROR, USERDETAILS, LOGOUTFROMPROFILE, SETTRUE } from "../reduxTypes";

const INITIAL_STATE = {
    uid: null,
    useremail: null,
    user: null,
    registerST: false
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UID:
            const nextState = {
                ...state,
                uid: action.payload.uid,
                useremail: action.payload.email,
            };
            return nextState;
        case USERDETAILS:
            const nextState3 = {
                ...state,
                user: action.payload.details
            }
            return nextState3
        case SETTRUE:
            const nextState4 = {
                ...state,
                registerST: action.payload.registerST
            }
            return nextState4
        case ERROR:
            const nextState1 = {
                ...state,
                error: action.payload,
            };
            return nextState1;
        case LOGOUTFROMPROFILE:
            const nextState2 = {
                ...state,
                user: action.payload,
                uid: action.payload,
                user: action.payload,
                registerST: false
            };
            return nextState2
        default:
            return state;
    }
}