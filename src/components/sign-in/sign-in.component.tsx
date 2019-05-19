import React from 'react';
import { IState, ISignInState } from '../../reducers';
import { connect } from 'react-redux';
import { submitSignIn, signupdatePassword, signupdateUserName } from '../../actions/sign-in.actions';
import history from '../../history';


interface ISignInProps {
  signin: ISignInState
  submitSignIn: (username: string, password: string, history) => void
  signupdatePassword: (event) => void
  signupdateUserName: (event) => void
}

export class SignInComponent extends React.Component<ISignInProps> {

  submit = async (event) => {
    event.preventDefault();
    console.log('attempting to login');
    this.props.submitSignIn(this.props.signin.username, this.props.signin.password, history);
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {

    return (
      <form className="form-signin" onSubmit={(e) => this.submit(e)}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername" className="sr-only">Username</label>
        <input type="text" id="inputUsername" name="username"
          className="form-control" placeholder="Username"
          required value={this.props.signin.username} onChange={(e) => this.props.signupdateUserName(e)} />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" name="password"
          className="form-control" placeholder="Password"
          required value={this.props.signin.password} onChange={(e) => this.props.signupdatePassword(e)} />

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p id="login-error">{this.props.signin.errorMessage}</p>
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return  {
    signin: state.signredux
  }
}

const mapDispatchToProps = {
  submitSignIn: submitSignIn,
  signupdatePassword: signupdatePassword,
  signupdateUserName: signupdateUserName
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
