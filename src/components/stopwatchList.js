import React from 'react';
import {connect} from 'react-redux';
import StopwatchItem from './stopwatchItem';
import { addStopwatch, startTime, stopTime } from '../actions';



export class StopwatchList extends React.Component {

  startTime(){

    setInterval(() => {      
      this.props.dispatch(startTime()); 
    }, 1000)
    
  }

  stopTime(){
    this.props.dispatch(stopTime());
  }
  addStopwatch(){
    this.props.dispatch(addStopwatch());
  }


  render(){
    return(
      <div>
        <button onClick={() => this.addStopwatch()}>Create Stopwatch</button>
        <StopwatchItem 
        startTime={() => this.startTime()}
        stopTime={() => this.stopTime()}        
        />
      </div>
    );

  }
}
const mapStateToProps = state => ({
  status: state.status

});

export default connect(mapStateToProps)(StopwatchList);
