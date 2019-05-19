export const clickerTypes = {
  CLICKER_UPDATE: 'CLICKER_UPDATE'
}
// nameless function called update clicks that has been given the action, action type and dispatch
export const updateClicks = (amount: number) => (dispatch) => {//first step actions created you need to know what kind of
  //action you want to keep track of
  //by setting the action to export allows it to be imported to the appropriate componenet
  dispatch({
    payload: {//an object attached to the action being taken in as a parameter in the clickReducer
      amount
    },
    type: clickerTypes.CLICKER_UPDATE//this is the type the action is. Every action needs a type because
    //it will be going through every reducer available thanks to the reducer combiner.
    //through the switch statement in the reducers we can be safe to know it will go into a specific reducer.
  })
}