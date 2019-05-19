import { ITextState } from ".";
import { wordtypes } from "../actions/word.actions";

const initialState: ITextState = {
    word: ""
}
  
export const wordReducer = (state = initialState, action) => {
    switch (action.type) {
        case wordtypes.UPDATEBOX:
            return {
                ...state,
                word: action.payload.word   
                //Only if you want to update the state is when you will provide the field that is being updated
            }
        case wordtypes.UPDATECLICK:
            return{
                ...state
            }
        default:
            break;
    }
    return state
}