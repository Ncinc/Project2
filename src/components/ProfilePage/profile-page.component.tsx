import React from 'react';
import { ProfileCalendarComponent } from './profile-calendar/profile-calendar.component';
import { Link } from 'react-router-dom';

interface IProfilePageState {
  monthNumberIndex: number;

}

export class ProfilePageComponent extends React.Component<any,IProfilePageState>{
  constructor(props) {
    super(props);
    this.state = {
      monthNumberIndex: 1,
    };
  }
  
  
  updateMonthNumber = (event) => {
    const indexOfMonth = event.target.selectedIndex + 1;
    this.setState({
      monthNumberIndex: indexOfMonth
    });
    console.log(indexOfMonth);
  }




  render() {
    return (

      <div className ="profileContainer">
        <span className="wrapper">
          {/*Put image url in a variable and render different picture for user to change their profile picture */}

          <img src="data:image/jpeg;base64,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"
            className="rounded float-left" alt="..."></img>
        </span>
        <span className="inputBox">
          <Link to="/submit-event">
          <button className="btn btn-primary"  type="submit">
            Submit New Event</button>
            </Link>
          </span>
          <span>
          <label htmlFor="inputMonth" className="sr-only">Month</label>
          <select onChange = {this.updateMonthNumber}>
            <option>January</option>
            <option>Feburary</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          </span>


          <ProfileCalendarComponent monthNumber = {this.state.monthNumberIndex} />

        
      </div>
    );
  }
}