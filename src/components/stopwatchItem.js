import React from 'react';

import {connect} from 'react-redux';


export class StopwatchItem extends React.Component {

  getSeconds = () => {
    return ('0' + this.props.time % 60).slice(-2);
  }

  getMinutes = () => {
    let min = Math.floor(this.props.time / 60) % 60
    if(min.toString().length < 2){
      return '0' + min;
    } else {
      return min;
    }    
  }

  getHours = () => {
    return Math.floor(this.props.time /60 /60).toLocaleString('en')    
  }  

    
  render(){

    return(
      <div className="container">

        <h1 className="title">Stopwatch</h1>

        <h1 id="timerLabel">{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h1>
        
        <div className="buttoncontainer">
            <button disabled={this.props.status} id="startBtn" className="buttons" onClick={() => this.props.startTime()}>start</button>
            <button disabled={!this.props.status} id="stop" className="buttons" onClick={() => this.props.stopTime()}>stop</button>
            <button id="reset" className="buttons">reset</button>
        </div>


      </div>

    );

  }
}

const mapStateToProps = state => ({
  time: state.time,
  status: state.status
});

export default connect(mapStateToProps)(StopwatchItem);