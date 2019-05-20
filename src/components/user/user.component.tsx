import React from 'react';
import { IState, IUserState } from '../../reducers';
import history from '../../history';
import {
  updateEmail, updateFirstName, updateLastName, updatePassword, updateUserName, submitUser, updateDate,
  updateTimestart, updateTimeEnd, updateEventLocation, updateDescription, 
  updateUserLocation, updateUserImage, updateEventImage
} from '../../actions/user.actions';
import { connect } from 'react-redux';

export interface UserFaceProps {
  user: IUserState
  updateEmail: (event) => void
  updateFirstName: (event) => void
  updateLastName: (event) => void
  updatePassword: (event) => void
  updateUserName: (event) => void
  updateUserLocation: (event) => void
  updateUserImage: (event) => void

  //EVENT
  updateTimestart: (event) => void
  updateTimeEnd: (event) => void
  updateDate: (event) => void
  updateEventLocation: (event) => void
  updateDescription: (event) => void
  updateEventImage: (event) => void

  // timestart: string;
  // timeend: string;
  // date: string;
  // eventlocation: string;
  // description: string;
 
  submitUser: (username: string, password: string, email: string, firstName: string, 
    lastName: string, userlocation: string, userimage: string,
    timestart: string, timeend: string,
    date: string, eventlocation: string, description: string, eventimage: string, history) => void
}

export class UserComponent extends React.Component<UserFaceProps> {

  // updateWord = (event) => {
  //   this.setState(
  //     word: event.target.value;
  //   )
  // }

  // this.state = this.props.word
  // this.state.word = this.props.word.word
  submit = (event) => {
    // console.log(this.props.submitUser(this.props.user.username, this.props.user.password, this.props.user.email,
    //   this.props.user.firstname, this.props.user.lastname,

    //   this.props.user.timestart, this.props.user.timeend, this.props.user.date, this.props.user.eventlocation,
    //   this.props.user.description))
    event.preventDefault();//this prevents the page from freaking out
    this.props.submitUser(this.props.user.username, this.props.user.password, this.props.user.email,
      this.props.user.firstname, this.props.user.lastname, this.props.user.userlocation, this.props.user.userimage,

      this.props.user.timestart, this.props.user.timeend, this.props.user.date, this.props.user.eventlocation,
      this.props.user.description, this.props.user.eventimage, history)
  }

  render() {
    // Whenever you have a function that needs an event, when calling in an event handler like onChange, etc.
    // If you provide a parameter in the arrow function ex. onChange= {(e) => } the e represent the event that is handled
    // in this example it represents changing the value of the input text box.

    return (
      <>
        <form className="Update Reimbursements" onSubmit={this.submit}>

          {/* Email 1 */}
          <label htmlFor="inputemail" className="sr-only">Email</label>
          <input type="string" id="inputemail" name="Email"
            className="form-control" placeholder="Email"
            required value={this.props.user.email} onChange={this.props.updateEmail} />

          {/* firstname 2 */}
          <label htmlFor="inputfirstname" className="sr-only">First Name</label>
          <input type="string" id="inputfirstname" name="First Name"
            className="form-control" placeholder="First Name"
            required value={this.props.user.firstname} onChange={this.props.updateFirstName} />

          {/* lastname 3 */}
          <label htmlFor="inputlastname" className="sr-only">Last Name</label>
          <input type="string" id="inputlastname" name="Last Name"
            className="form-control" placeholder=" Last Name"
            required value={this.props.user.lastname} onChange={this.props.updateLastName} />

          {/* password 4 */}
          <label htmlFor="inputpassword" className="sr-only">Password</label>
          <input type="string" id="inputpassword" name="Password"
            className="form-control" placeholder="Password"
            required value={this.props.user.password} onChange={this.props.updatePassword} />

          {/* username 5 */}
          <label htmlFor="inputusername" className="sr-only">User Name</label>
          <input type="string" id="inputusername" name="User Name"
            className="form-control" placeholder="User Name"
            required value={this.props.user.username} onChange={this.props.updateUserName} />

          {/* userlocation 6 */}
          <label htmlFor="inputuserlocation" className="sr-only">User Location</label>
          <input type="string" id="inputuserlocation" name="User Location"
            className="form-control" placeholder="User Location"
            required value={this.props.user.userlocation} onChange={this.props.updateUserLocation} />

          {/* userimage 7 */}
          <label htmlFor="inputuserimage" className="sr-only">User Image</label>
          <input type="string" id="inputuserimage" name="User Image"
            className="form-control" placeholder="User Image"
            required value={this.props.user.userimage} onChange={this.props.updateUserImage} />


          {/* EVENT */}


          {/* timestart 8 */}
          <label htmlFor="inputtimestart" className="sr-only">Time Start</label>
          <input type="string" id="inputtimestart" name="Time Start"
            className="form-control" placeholder="Time Start"
            required value={this.props.user.timestart} onChange={this.props.updateTimestart} />

          {/* timeend 9 */}
          <label htmlFor="inputtimeend" className="sr-only">Time End</label>
          <input type="string" id="inputtimeend" name="Time End"
            className="form-control" placeholder="Time End"
            required value={this.props.user.timeend} onChange={this.props.updateTimeEnd} />

          {/* Date 10 */}
          <label htmlFor="inputdate" className="sr-only">Date</label>
          <input type="string" id="inputdate" name="Date"
            className="form-control" placeholder="Date"
            required value={this.props.user.date} onChange={this.props.updateDate} />

          {/* eventlocation 11 */}
          <label htmlFor="inputeventlocation" className="sr-only">Event Location</label>
          <input type="string" id="inputeventlocation" name="Event Location"
            className="form-control" placeholder="Event Location"
            required value={this.props.user.eventlocation} onChange={this.props.updateEventLocation} />

          {/* description 12 */}
          <label htmlFor="inputdescription" className="sr-only">Description</label>
          <input type="string" id="inputdescription" name="Description"
            className="form-control" placeholder="Description"
            required value={this.props.user.description} onChange={this.props.updateDescription} />

          {/* description 13 */}
          <label htmlFor="inputeventimage" className="sr-only">Event Image</label>
          <input type="string" id="inputeventimage" name="Event Image"
            className="form-control" placeholder="Event Image"
            required value={this.props.user.eventimage} onChange={this.props.updateEventImage} />

          <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        </form>
      </>
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
  //   word:ITextState,
  //   useredux: IUserState
  // }
  // 
  return {
    user: state.useredux
  }
}

const mapDispatchToProps = {
  updateEmail: updateEmail,
  updateFirstName: updateFirstName,
  updateLastName: updateLastName,
  updatePassword: updatePassword,
  updateUserName: updateUserName,
  updateUserLocation: updateUserLocation,
  updateUserImage: updateUserImage,
 
  //event

  updateTimestart: updateTimestart,
  updateTimeEnd: updateTimeEnd,
  updateDate: updateDate,
  updateEventLocation: updateEventLocation,
  updateDescription: updateDescription,
  updateEventImage: updateEventImage,
  submitUser: submitUser
}

// when you want to use this component
// You have to import it like this
// import HomeComponent from '.'
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);