import { IUserState } from ".";
import { userTypes } from "../actions/user.actions";

const initialState: IUserState = {
    email: "", //  null,
    firstname: "", //null
    lastname: "", // null
    password: "", // null
    username: "", // null
    userlocation: "",
    userimage: "",

    //event

    timestart: "",
    timeend: "",
    date: "",
    eventlocation: "",
    description: "",
    eventimage: ""
}

export const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.UPDATEMAIL:
            // console.log(action.payload)
            return {
                ...state,
                email: action.payload.email
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEFIRSTNAME:
            return {
                ...state,
                firstname: action.payload.firstname
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATELASTNAME:
            return {
                ...state,
                lastname: action.payload.lastname
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEPASSWORD:
            return {
                ...state,
                password: action.payload.password
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEUSERNAME:
            return {
                ...state,
                username: action.payload.username
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEUSERLOCATION:
            return {
                ...state,
                userlocation: action.payload.userlocation
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEUSERIMAGE:
            return {
                ...state,
                userimage: action.payload.userimage
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        //EVENT

        case userTypes.UPDATETIMESTART:
            return {
                ...state,
                timestart: action.payload.timestart
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATETIMEND:
            return {
                ...state,
                timeend: action.payload.timeend
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATETDATE:
            return {
                ...state,
                date: action.payload.date
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEEVENTLOCATION:
            return {
                ...state,
                eventlocation: action.payload.eventlocation
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case userTypes.UPDATEDESCRIPTION:
            return {
                ...state,
                description: action.payload.description
                //Only if you want to update the state is when you will provide the field that is being updated
            }

            case userTypes.UPDATEEVENTIMAGE:
                return {
                    ...state,
                    eventimage: action.payload.eventimage
                    //Only if you want to update the state is when you will provide the field that is being updated
                }

        //END EVENT

        case userTypes.SUBMITUSER:
            return {
                ...state

                //Only if you want to update the state is when you will provide the field that is being updated
            }

        default:
            break;
    }
    return state
}