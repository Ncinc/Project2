import React from 'react';
import { ITextState, IState } from '../../reducers';
import { updateWord, updateClickWord } from '../../actions/word.actions';
import { connect } from 'react-redux';

export interface WordFaceProps{
  word: ITextState
  updateWord: (event) => void
  updateClickWord: (words) => void
}

class HomeComponent extends React.Component<WordFaceProps> {

  // updateWord = (event) => {
  //   this.setState(
  //     word: event.target.value;
  //   )
  // }

  // this.state = this.props.word
  // this.state.word = this.props.word.word

  render() {
    // Whenever you have a function that needs an event, when calling in an event handler like onChange, etc.
    // If you provide a parameter in the arrow function ex. onChange= {(e) => } the e represent the event that is handled
    // in this example it represents changing the value of the input text box.
    return (
      <div>
        <input type="text" value={this.props.word.word} onChange={(e) => this.props.updateWord(e)}/>    
        <button className="btn" onClick={() => this.props.updateClickWord(this.props.word.word)}>Submit</button>
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