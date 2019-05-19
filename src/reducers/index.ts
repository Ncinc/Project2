import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { User } from "../model2/user2";
import { authReducer } from "./auth.reducer";
import { wordReducer } from "./word.reducer";
import { useReducer } from "./user.reducer";
import { signReducer } from "./signin.reducer";
import { createventReducer } from "./createvent.reducer";


export interface ISubmitEventState {
  timestart: string;
  timeend: string;
  date: string;
  eventlocation: string;
  description: string;
  eventimage: string;
}

export interface IUserState {
  email: string; //  null
  firstname: string; //null
  lastname: string; // null
  password: string; // null
  username: string; // null
  userlocation: string;
  userimage: string;
 

  //event

  timestart: string;
  timeend: string;
  date: string;
  eventlocation: string;
  description: string;
  eventimage: string;
}


export interface ISignInState {
  username: string;
  password: string;
  errorMessage: string;
}


export interface IClickerState {//the original state. this will be exported
  clicks: number// clicks is a number
}

export interface ITextState {
  word: string
}

export interface IChuckNorrisState {
  joke: string,
  proccessingNewJoke: boolean
}

export interface IAuthState {
  currentUser?: User,
  errorMessage?: string
}

export interface IState {// pass in the new state
  clicker: IClickerState,
  chuckNorris: IChuckNorrisState,
  auth: IAuthState,
  word: ITextState
  useredux: IUserState
  signredux: ISignInState
  createvent:ISubmitEventState
}

export const state = combineReducers<IState>({// add the reducer to the state
  //then it gets set to the store
  clicker: clickerReducer,
  chuckNorris: chuckNorrisReducer,
  auth: authReducer,
  word: wordReducer,
  useredux: useReducer,
  signredux: signReducer,
  createvent: createventReducer
})