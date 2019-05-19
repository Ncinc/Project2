import { ISignInState } from ".";
import { signInTypes } from "../actions/sign-in.actions";

const initialState: ISignInState = {
 
    password: "", // null
    username: "", // null
    errorMessage: ""
}

export const signReducer = (state = initialState, action) => {
    switch (action.type) {
        case signInTypes.SUBMITSIGNIN:
            // console.log(action.payload)
            return {
                ...state
            }
        case signInTypes.SIGNUPUSERNAMEUP:
            return {
                ...state,
                username: action.payload.username
            }
        case signInTypes.SIGNUPPASSWORDUP:
            return {
                ...state,
                password: action.payload.password
            }
        default:
            break;
    }
    return state
}