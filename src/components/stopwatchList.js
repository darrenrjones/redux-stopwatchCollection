import React from 'react';
import {connect} from 'react-redux';
import StopwatchItem from './stopwatchItem';
import { addStopwatch, startTime, toggleStatus } from '../actions';



export class StopwatchList extends React.Component {

  async startTime() {
    await this.props.dispatch(toggleStatus()); 
    this.runTime();   
  }
  runTime(){
    if(this.props.status === true){      
      setTimeout(() => {  
        this.props.dispatch(startTime());
        this.runTime();
      }, 1000);
    }
  }
  stopTime(){
    this.props.dispatch(toggleStatus());
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
        status={this.props.status}        
        />
      </div>
    );

  }
}
const mapStateToProps = state => ({
  status: state.status

});

export default connect(mapStateToProps)(StopwatchList);
