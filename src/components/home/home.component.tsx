import React from 'react';
import { ITextState, IState } from '../../reducers';
import { updateWord, updateClickWord } from '../../actions/word.actions';
import { connect } from 'react-redux';
import { SignInComponent } from '../sign-in/sign-in.component';
//import { userComponent } from '../user/user.component';
import {  User } from '../../model/user' 
//import { signupdateUserName } from '../../actions/sign-in.actions';
//import { submitSignIn, signupdatePassword, signupdateUserName } from '../../actions/sign-in.actions';

export interface WordFaceProps{
  word: ITextState
  user: User
  signedIn: SignInComponent;
  updateWord: (event) => void
  updateClickWord: (words) => void
}

export class HomeComponent extends React.Component<WordFaceProps> {

  // updateWord = (event) => {
  //   this.setState(
  //     word: event.target.value;
  //   )
  // }

  // this.state = this.props.word
  // this.state.word = this.props.word.word

  render() {
    const username = this.props.signedIn;
    // Whenever you have a function that needs an event, when calling in an event handler like onChange, etc.
    // If you provide a parameter in the arrow function ex. onChange= {(e) => } the e represent the event that is handled
    // in this example it represents changing the value of the input text box.
    return (
      <div>
        <img src="https://earnworthy.com/wp-content/uploads/2016/04/6-Useful-Social-Media-Editorial-Calendar-Tools-1.png"
          className="card-img-top"
          alt="..." />
        <p> Hello {username} <span> Wellcome to your Social Calender where you can schedule you events </span>
        </p>
        {/* <label htmlFor="inputUsername" className="sr-only">Username</label> */}
        {/* <input type="text" value={this.props.word.word} onChange={(e) => this.props.updateWord(e)}/>    
        <button className="btn" onClick={() => this.props.updateClickWord(this.props.word.word)}>Submit</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  // Here you want to essentially connect the state in this component to its representation the the global state IState.
  // Meaning that in the global you defined these component states
  // export interface IState {// pass in the new state
  //   clicker: IClickerState,
  //   chuckNorris: IChuckNorrisState,
  //   auth: IAuthState,
  //   word:ITextState
  // }
  // 
  return {
    word: state.word
  }
}

const mapDispatchToProps = {
  updateWord: updateWord,
  updateClickWord: updateClickWord
}

// when you want to use this component
// You have to import it like this
// import HomeComponent from '.'
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);