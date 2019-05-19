import React from 'react';

const monthDayCount: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Array of the number of days for each month

interface IMonth {

  monthName: string; //Month name based on index
  daysNumber: number[]; //an array of each consecutive day
}
interface IProfileCalendarProps {

  monthNumber: number; //Selected Index of month

}


export class ProfileCalendarComponent extends React.Component<IProfileCalendarProps, IMonth> {
  dayCounter = 1;
  constructor(props) {
    super(props);
    this.state = {
      monthName: 'largeDaniel',
      daysNumber: []
    };
  }
  eventClickOnDay = (event) => {
    let variable = event.target.innerText;
    console.log(variable)
  }
  eventMapDays = () => {
    let daysArray: number[] = [];

    let monthDays = monthDayCount[this.props.monthNumber - 1]; //Selecting number of days
    console.log(monthDays);
    for (let i = 1; i <= monthDays; i++) {
      daysArray.push(i); // filling up the array for each consecutive day

      if (i % 7 === 0) {
        daysArray.push(-1);

      }

    }

    let fillerDays = 0;
    if (monthDays === 28) {
      fillerDays = 0;
    }
    if (monthDays === 30) {
      fillerDays = 5;
    }
    if (monthDays === 31) {
      fillerDays = 4;
    }
    for (let i = 0; i < fillerDays; i++) {
      daysArray.push(32);
    }

    this.setState({
      daysNumber: daysArray
    });
    console.log(this.state.daysNumber);
    console.log(daysArray);

  }
  componentDidUpdate(prevProps) {
    if (this.props.monthNumber !== prevProps.monthNumber) {
      this.eventMapDays();
      this.dayCounter = 1;
    }
  }
  componentDidMount() {
    console.log(this.props.monthNumber);
    this.eventMapDays();
    this.dayCounter = 1;
  }

  renderDay(dayNumber: number) {
    this.dayCounter++;
    

    if (dayNumber === 32) {
      return (<div className="col columnCalendar" key={this.dayCounter} />);
    }
    if (dayNumber === -1) {
      return (<div className="w-100" key={this.dayCounter}></div>);
    }
    else {
      

      return (<div className="col columnCalendar" key={this.dayCounter} onClick={this.eventClickOnDay}>{dayNumber}</div>);
    }
  }

  render() {
    console.log(this.state.daysNumber);

    return (
      <div>
        <div className="container">
          <div className="row columnCalendar">

            {this.state.daysNumber.map(dayNumber =>
              (this.renderDay(dayNumber)))}
            {/** error could be that there is no day to click on because of the onClick event */}


          </div>
        </div>
      </div>
    );
  }
}