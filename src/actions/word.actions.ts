
export const wordtypes = {
    UPDATEBOX: 'UPDATEBOX',
    UPDATECLICK: 'UPDATECLICK',
  }

  export const updateWord = (event) => (dispatch) => {
    
    dispatch({
        payload: {
            word: event.target.value
        },
        type: wordtypes.UPDATEBOX
      })

  }

  export const updateClickWord = (words:string) => (dispatch) => {
    // For onClick event handlers you don't need to provide an event.
    // Because when you click something you don't need to get the value of the 
    // thing that was clicked.
    console.log(words)
    dispatch({
        type: wordtypes.UPDATECLICK
    })

  }