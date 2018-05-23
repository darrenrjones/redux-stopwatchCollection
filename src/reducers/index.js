import { ADD_STOPWATCH } from '../actions';

const initialState = {
  status: false
};

export const reducer = (state=initialState, action) => {

  if(action.type === ADD_STOPWATCH){
    console.log('added stpwatch');
    
    return undefined
  }

  return state;
};
