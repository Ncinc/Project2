import React from 'react';
import { Link } from 'react-router-dom';
import SocialCalendarLogo from '../../assets/social-calendar-logo.png';

//import { IClickerState, IState } from '../../reducers';
//import { connect } from 'react-redux';
// import { User } from '../../model/user';

interface INaveProps {
  //clicker: IClickerState,
  // currentUser?: User
}

export class NavComponent extends React.PureComponent<INaveProps> {
  render() {
    // const currentUser = this.props.currentUser;
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-dark bg-dark display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position calendar-logo" src={SocialCalendarLogo} alt="calendar" />
          </Link>
        </div>
        <div>{/*currentUser && currentUser.name*/}</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>

            <li className="nav-item active">
                  <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
                </li>

            <li className="nav-item active">
              <Link to="/my-profile" className="unset-anchor nav-link">My Profile</Link>
            </li>

            {/* <li className="nav-item active">
              <Link to="/redux" className="unset-anchor nav-link">Redux</Link>
            </li> */}



            {/* {
              currentUser
                ? <li className="nav-item active">
                  <Link to="/sign-in" className="unset-anchor nav-link">Sign Out</Link>
                </li>
                : <li className="nav-item active">
                  <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
                </li>
            } */}


<li className="nav-item active">
              {/* <Link to="/clicker" className="unset-anchor nav-link">Clicker {this.props.clicker.clicks}</Link> */}
            </li>
            <li className="nav-item active">
              <Link to="/sign-up" className="unset-anchor nav-link">Sign Up</Link>
            </li>           
          </ul>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = (state: IState) => {
//   return {
//     clicker: state.clicker,
//     currentUser: state.auth.currentUser
//   }
// }

// export default connect(mapStateToProps)(NavComponent);
