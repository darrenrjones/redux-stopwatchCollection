import { ADD_STOPWATCH, START_TIME, STOP_TIME } from '../actions';

const initialState = {
  list: [],
  status: false,
  time: 0,
};

export default function reducer(state=initialState, action) {

  if (action.type === START_TIME){
    console.log('timer started');
    return {
      ...state,
      status: true,
      time: state.time + 1
    }
  }
  if(action.type === ADD_STOPWATCH){
    console.log('added stopwatch');    
    return null;
  } 
  if (action.type === STOP_TIME){
    console.log('timer STOPPED');
    return {
      ...state,
      status: false
    }
  }

  return state;
};
