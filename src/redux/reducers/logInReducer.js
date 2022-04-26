const INITIAL_STATE = {
    uid: null,
    useremail:null,
    user:null
    
}

const UID = "UID";
const ERROR = "ERROR";

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UID:
            const nextState = {
                ...state,
                uid: action.payload.uid,
                useremail:action.payload.email,
                user:action.payload.details
            };
            return nextState;
        case ERROR:
            const nextState1 = {
                ...state,
                error: action.payload,
            };
            return nextState1;
        default:
            return state;
    }
}