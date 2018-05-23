import React from 'react';
import './App.css';
import StopwatchList from './stopwatch';
import {connect} from 'react-redux';


export class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>Stopwatch Collection</h1>
        <StopwatchList />
      </div>
    );
  }
}

  const mapStateToProps = state => ({
    stopwatchList: 'trash'
  });

  export default connect(mapStateToProps)(App);