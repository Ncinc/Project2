
export const userTypes = {
  UPDATEMAIL: 'UPDATEMAIL',
  UPDATEFIRSTNAME: 'UPDATEFIRSTNAME',
  UPDATELASTNAME: 'UPDATELASTNAME',
  UPDATEPASSWORD: 'UPDATEPASSWORD',
  UPDATEUSERNAME: 'UPDATEUSERNAME',
  UPDATEUSERLOCATION: 'UPDATEUSERLOCATION',
  UPDATEUSERIMAGE: 'UPDATEUSERIMAGE',
  
  //EVENT
  UPDATETIMESTART: 'UPDATETIMESTART',
  UPDATETIMEND: 'UPDATETIMEND',
  UPDATETDATE: 'UPDATETDATE',
  UPDATEEVENTLOCATION: 'UPDATEEVENTLOCATION',
  UPDATEDESCRIPTION: 'UPDATEDESCRIPTION',
  UPDATEEVENTIMAGE: 'UPDATEEVENTIMAGE',

  //SUBMIT
  // SUBMITSIGNIN: 'SUBMITSIGNIN',
  SUBMITUSER: 'SUBMITUSER'
  
}

export const updateEmail = (event) => (dispatch) => {

  dispatch({
    payload: {
      email: event.target.value
    },
    type: userTypes.UPDATEMAIL
  })
}

export const updateFirstName = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      firstname: event.target.value
    },
    type: userTypes.UPDATEFIRSTNAME
  })
}

export const updateLastName = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      lastname: event.target.value
    },
    type: userTypes.UPDATELASTNAME
  })
}

export const updatePassword = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      password: event.target.value
    },
    type: userTypes.UPDATEPASSWORD
  })
}

export const updateUserName = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      username: event.target.value
    },
    type: userTypes.UPDATEUSERNAME
  })

}

export const updateUserLocation = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      userlocation: event.target.value
    },
    type: userTypes.UPDATEUSERLOCATION
  })

}


export const updateUserImage = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      userimage: event.target.value
    },
    type: userTypes.UPDATEUSERIMAGE
  })

}


//EVENT START


export const updateTimestart = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      timestart: event.target.value
    },
    type: userTypes.UPDATETIMESTART
  })
}


export const updateTimeEnd = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      timeend: event.target.value
    },
    type: userTypes.UPDATETIMEND
  })
}

export const updateDate = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      date: event.target.value
    },
    type: userTypes.UPDATETDATE
  })
}

export const updateEventLocation = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      eventlocation: event.target.value
    },
    type: userTypes.UPDATEEVENTLOCATION
  })
}

export const updateDescription = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      description: event.target.value
    },
    type: userTypes.UPDATEDESCRIPTION
  })
}

export const updateEventImage = (event) => (dispatch) => {
  // For onClick event handlers you don't need to provide an event.
  // Because when you click something you don't need to get the value of the 
  // thing that was clicked.
  dispatch({
    payload: {
      eventimage: event.target.value
    },
    type: userTypes.UPDATEEVENTIMAGE
  })
}

//EVENT END

//SIGN IN

//SIGN IN END

// export const getUserName = (event) => (dispatch) => {
//   // For onClick event handlers you don't need to provide an event.
//   // Because when you click something you don't need to get the value of the 
//   // thing that was clicked.
//   dispatch({
//     payload: {
//       username: event.target.value
//     },
//     type: userTypes.GETUSERNAME
//   })
// }

// export const getPassWord = (event) => (dispatch) => {
//   // For onClick event handlers you don't need to provide an event.
//   // Because when you click something you don't need to get the value of the 
//   // thing that was clicked.
//   dispatch({
//     payload: {
//       password: event.target.value
//     },
//     type: userTypes.GETPASSWORD
//   })
// }

// //SUBMIT USER


export const submitUser = (username: string, password: string, email: string, firstname: string,
  lastname: string, userlocation: string, userimage: string ,timestart: string, timeend: string, date: string, eventlocation: string, description: string, eventimage: string, history) => async (dispatch) => {
    const newUser = {
      username: username,
      password: password,
      email: email,
      firstname: firstname,
      lastname: lastname,
      userlocation: userlocation,
      userimage: userimage,
      connect: [{
        timestart: timestart,
        timeend: timeend,
        date: date,
        eventlocation: eventlocation,
        description: description,
        eventimage: eventimage
      }]
    }

    try {
      const resp = await fetch('http://localhost:8080/user/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(newUser),
        headers: {
          'content-type': 'application/json'
        }
      })

      //const body = await resp.json();

    

      if (resp.status === 401) {
        console.log(resp);
      } else if (resp.status === 200) {
        history.push("/my-profile")

        dispatch({
          type: userTypes.SUBMITUSER
        })
        // redirect to spaceships page
        // const user = await resp.json();
        console.log(resp);
        //this.props.history.push('/reimburseID');
      } else {
        console.log('Cannot Update At This Time');
      }

    } catch (err) {
      console.log(err);
    }
  }