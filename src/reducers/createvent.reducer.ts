import { ISubmitEventState } from ".";
import { createeventTypes } from "../actions/createevent.actions";


const initialState: ISubmitEventState = {
 
    //event
    timestart: "",
    timeend: "",
    date: "",
    eventlocation: "",
    description: "",
    eventimage: ""
}


export const createventReducer = (state = initialState, action) => {
    switch (action.type) {
        //EVENT

        case createeventTypes.UPDATETIMESTART:
            return {
                ...state,
                timestart: action.payload.timestart
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case createeventTypes.UPDATETIMEND:
            return {
                ...state,
                timeend: action.payload.timeend
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case createeventTypes.UPDATETDATE:
            return {
                ...state,
                date: action.payload.date
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case createeventTypes.UPDATEEVENTLOCATION:
            return {
                ...state,
                eventlocation: action.payload.eventlocation
                //Only if you want to update the state is when you will provide the field that is being updated
            }

        case createeventTypes.UPDATEDESCRIPTION:
            return {
                ...state,
                description: action.payload.description
                //Only if you want to update the state is when you will provide the field that is being updated
            }

            case createeventTypes.UPDATEEVENTIMAGE:
                return {
                    ...state,
                    eventimage: action.payload.eventimage
                    //Only if you want to update the state is when you will provide the field that is being updated
                }

        //END EVENT
       
        case createeventTypes.SUMBITEVENT:
            return {
                ...state

                //Only if you want to update the state is when you will provide the field that is being updated
            }

        default:
            break;
    }
    return state
}