import React from 'react';
import {connect} from 'react-redux';
import StopwatchItem from './stopwatchItem';



export class StopwatchList extends React.Component {

  render(){
    return(
      <div>
        <button>Create Stopwatch</button>
      </div>
    );

  }
}

export default connect()(StopwatchList);