import React from 'react';
import { IState, ISubmitEventState } from '../../reducers';
import history from '../../history';
import {
    updateTimestart, updateTimeEnd, updateDate,
    updateEventLocation, updateDescription, updateEventImage, submitEvent
} from '../../actions/createevent.actions';
import { connect } from 'react-redux';

export interface EventFaceProps {
    event: ISubmitEventState

    //EVENT
    updateTimestart: (event) => void
    updateTimeEnd: (event) => void
    updateDate: (event) => void
    updateEventLocation: (event) => void
    updateDescription: (event) => void
    updateEventImage: (event) => void

    submitEvent: (timestart: string, timeend: string,
        date: string, eventlocation: string, description: string, eventimage: string, history) => void
}

// class UserComponent extends React.Component
class SubmitEventComponent extends React.Component<EventFaceProps> {


    submit = (event) => {
        // console.log(this.props.submitUser(this.props.user.username, this.props.user.password, this.props.user.email,
        //   this.props.user.firstname, this.props.user.lastname,

        //   this.props.user.timestart, this.props.user.timeend, this.props.user.date, this.props.user.eventlocation,
        //   this.props.user.description))
        event.preventDefault();//this prevents the page from freaking out
        this.props.submitEvent(this.props.event.timestart, this.props.event.timeend, this.props.event.date,
            this.props.event.eventlocation, this.props.event.description, this.props.event.eventimage, history)
    }

    render() {
        return (
            <>
                <form className="Update Reimbursements" onSubmit={this.submit}>

                    {/* EVENT */}

                    {/* timestart 8 */}
                    <label htmlFor="inputtimestart" className="sr-only">Time Start</label>
          <input type="string" id="inputtimestart" name="Time Start"
            className="form-control" placeholder="Time Start"
            required value={this.props.event.timestart} onChange={(e) => this.props.updateTimestart(e)} />

                    {/* timeend 9 */}
                    <label htmlFor="inputtimeend" className="sr-only">Time End</label>
                    <input type="string" id="inputtimeend" name="Time End"
                        className="form-control" placeholder="Time End"
                        required value={this.props.event.timeend} onChange={this.props.updateTimeEnd} />

                    {/* Date 10 */}
                    <label htmlFor="inputdate" className="sr-only">Date</label>
                    <input type="string" id="inputdate" name="Date"
                        className="form-control" placeholder="Date"
                        required value={this.props.event.date} onChange={this.props.updateDate} />

                    {/* eventlocation 11 */}
                    <label htmlFor="inputeventlocation" className="sr-only">Event Location</label>
                    <input type="string" id="inputeventlocation" name="Event Location"
                        className="form-control" placeholder="Event Location"
                        required value={this.props.event.eventlocation} onChange={this.props.updateEventLocation} />

                    {/* description 12 */}
                    <label htmlFor="inputdescription" className="sr-only">Description</label>
                    <input type="string" id="inputdescription" name="Description"
                        className="form-control" placeholder="Description"
                        required value={this.props.event.description} onChange={this.props.updateDescription} />

                    {/* description 13 */}
                    <label htmlFor="inputeventimage" className="sr-only">Event Image</label>
                    <input type="string" id="inputeventimage" name="Event Image"
                        className="form-control" placeholder="Event Image"
                        required value={this.props.event.eventimage} onChange={this.props.updateEventImage} />

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                </form>
            </>
        );

    }

    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         timestart: '',
    //         timeend: '',
    //         date: '',
    //         eventlocation: '',
    //         description: ''

    //      }
    //  }

    //   submit = async () => {
    //      let body = {};
    //      if ((this.state.timestart !== '') && (this.state.timeend !== '') && (this.state.date !== '') 
    //      && (this.state.eventlocation) && (this.state.description !== '')) {

    //        body['timestart'] = this.state.timestart;
    //        body['timeend'] = this.state.timeend;
    //        body['date'] = this.state.date;
    //       body['eventlocation'] = this.state.eventlocation;
    //        body['description'] = this.state.description;

    //        const resp = await fetch('http://localhost:8080/event', {
    //          method: 'POST',
    //          credentials: 'include',
    //          body: JSON.stringify(body),
    //          headers: {
    //        'content-type': 'application/json'
    //     }
    //    })
    //       const respbody = await resp.json();
    //     this.setState({
    //         //user: respbody
    //        })
    //      }
    //    };



    // updateTimeStart = (event) => {
    //     this.setState({
    //         timestart: event.target.value
    //     });
    // }

    // updateTimeEnd = (event) => {
    //     this.setState({
    //         timeend: event.target.value
    //     })
    // }


    // updateDate = (event) => {
    //     this.setState({
    //         date: event.target.value
    //     });
    // }

    // updateEventLocation = (event) => {
    //     this.setState({
    //         eventlocation: event.target.value
    //     })
    // }

    // updateDescription = (event) => {
    //     this.setState({
    //         description: event.target.value
    //     })
    // }

    //  render() {
    //     const { timestart, timeend, date, eventlocation, description  } = this.state;
    //      return (
    //         <form className="form-submitEvent" onSubmit={this.submit}>
    //             <div className="form-group">
    //                 <h1> Please fill event Information</h1>
    //                 <label>Starting Time</label>
    //                 <input type="timestart" className="form-control" id="exampletimestart"
    //                     aria-describedby="timeStartHelp" placeholder="Enter TimeStart"
    //                     value={timestart} onChange={this.updateTimeStart} ></input>
    //             </div>

    //             <div className="form-group">
    //                 <label>Ending Time</label>
    //                 <input type="timeend" className="form-control" id="exampletimeend"
    //                     aria-describedby="TimeEndHelp" placeholder="Enter TimeEnd"
    //                     value={timeend} onChange={this.updateTimeEnd}></input>
    //             </div>
    //             <div className="form-group">
    //                 <label>Date</label>
    //                 <input type="date" className="form-control" id="exampleDate"
    //                     aria-describedby="dateHelp" placeholder="Enter the Date"
    //                     value={date} onChange={this.updateDate}></input>
    //             </div>
    //             <div className="form-group">
    //                 <label>Event Location</label>
    //                 <input type="EventLocation" className="form-control" id="exampleEventLocation"
    //                     aria-describedby="eventLocationHelp" placeholder="Enter the Event Location"
    //                     value={eventlocation} onChange={this.updateEventLocation}></input>
    //             </div>
    //             <div className="form-group">
    //                 <label>Description</label>
    //                 <input type="description" className="form-control" id="exampleDescription" placeholder="Description"
    //                     value={description} onChange={this.updateDescription}></input>
    //             </div>
    //             <button type="submit" className="btn btn-primary">Submit</button>
    //         </form>
    //          )
    //      }
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
        event: state.createvent
    }
}

const mapDispatchToProps = {

    //event

    updateTimestart: updateTimestart,
    updateTimeEnd: updateTimeEnd,
    updateDate: updateDate,
    updateEventLocation: updateEventLocation,
    updateDescription: updateDescription,
    updateEventImage: updateEventImage,
    submitEvent: submitEvent
}

// when you want to use this component
// You have to import it like this
// import HomeComponent from '.'
export default connect(mapStateToProps, mapDispatchToProps)(SubmitEventComponent);