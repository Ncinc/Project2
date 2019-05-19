export const signInTypes = {
    //SUBMIT
    SUBMITSIGNIN: 'SUBMITSIGNIN',
    SIGNUPUSERNAMEUP: 'SIGNUPUSERNAMEUP',
    SIGNUPPASSWORDUP: 'SIGNUPPASSWORDUP'
}

export const submitSignIn = (username: string, password: string, history) => async (dispatch) => {
    // event.preventDefault();
    console.log('attempting to login');
    const credentials = {
      username:username,
      password: password
    };
  
    try {
      const resp = await fetch('http://localhost:8080/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(credentials),
        headers: {
          'content-type': 'application/json'
        }
      })
  
      if (resp.status === 401) {
        console.log(resp);
      } else if (resp.status === 201) {
        history.push("/my-profile")
        dispatch({
            type: signInTypes.SUBMITSIGNIN
          })
        console.log(resp);
      } else {
        console.log(resp);
      }
    } catch (err) {
      console.log(err);
    }
  }

  export const signupdatePassword = (event) => (dispatch) => {
    // For onClick event handlers you don't need to provide an event.
    // Because when you click something you don't need to get the value of the 
    // thing that was clicked.
    dispatch({
      payload: {
        password: event.target.value
      },
      type: signInTypes.SIGNUPPASSWORDUP
    })
  }

  export const signupdateUserName = (event) => (dispatch) => {
    // For onClick event handlers you don't need to provide an event.
    // Because when you click something you don't need to get the value of the 
    // thing that was clicked.
    dispatch({
      payload: {
        username: event.target.value
      },
      type: signInTypes.SIGNUPUSERNAMEUP
    })
  
  }