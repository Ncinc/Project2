export const createeventTypes = {
 
    //EVENT
    UPDATETIMESTART: 'UPDATETIMESTART',
    UPDATETIMEND: 'UPDATETIMEND',
    UPDATETDATE: 'UPDATETDATE',
    UPDATEEVENTLOCATION: 'UPDATEEVENTLOCATION',
    UPDATEDESCRIPTION: 'UPDATEDESCRIPTION',
    UPDATEEVENTIMAGE: 'UPDATEEVENTIMAGE',
  
    //SUBMIT
    SUMBITEVENT: 'SUMBITEVENT'
    
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
      type: createeventTypes.UPDATETIMESTART
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
      type: createeventTypes.UPDATETIMEND
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
      type: createeventTypes.UPDATETDATE
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
      type: createeventTypes.UPDATEEVENTLOCATION
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
      type: createeventTypes.UPDATEDESCRIPTION
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
      type: createeventTypes.UPDATEEVENTIMAGE
    })
  }
  
  //EVENT END
  
  
  //SUBMIT
  export const submitEvent = (timestart: string, timeend: string, date: string, eventlocation: string, description: string, eventimage: string, history) => async (dispatch) => {
    const newEvent = {
        timestart: timestart,
        timeend: timeend,
        date: date,
        eventlocation: eventlocation,
        description: description,
        eventimage: eventimage
    }

    try {
      const resp = await fetch('http://localhost:8080/event/', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(newEvent),
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
          type: createeventTypes.SUMBITEVENT
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

  //SUBMIT END