import React from 'react';
import { IncrementerComponent } from './clicker-incrementer/clicker-incrementer.component';
import { IClickerState, IState } from '../../../reducers';
import { connect } from 'react-redux';
import { updateClicks } from '../../../actions/clicker.actions';//second step actions passed in
//with this inside of the component we need to attach it to a local variable that has completed to hopeful action


export interface IClickerProps {
  clicker: IClickerState,//original state of the clicker
  updateClicks: (amount: number) => void//third step local function
}

export class ClickerComponent extends React.Component<IClickerProps, {}> {
  // a class that has the local function that will
  // be paired to the action that was imported

  render() {
    return (
      <div>
        <h2>Clicks: {this.props.clicker.clicks}</h2>
        <IncrementerComponent label="+1" increment={() => this.props.updateClicks(1)} />
        <br />
        {
          this.props.clicker.clicks >= 47 &&
          <IncrementerComponent label="+2" increment={() => this.props.updateClicks(2)} />
        }
      </div>
    );
  }
  // the local function is being changed.
}

const mapStateToProps = (state: IState) => {//connects both states Istate and Iclickerstate
  return {
    clicker: state.clicker
  }
}

const mapDispatchToProps = {
  //connects the local function and the imported function
  //so the changes that happened in the componenet can be carried over
  updateClicks: updateClicks
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent);
// the combined updateclicks, and the combined state of clicker and makes a new componenet called ClickerComponent