import React, { Component } from 'react';
import logo from './piclogo.jpg';
import logo2 from './logo.svg';
import './App.css';

import Readout from './Readout.js';
import DisButton from './daButton.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      theNumber:999
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo2} className="App-logo" alt="logo" />
          <h2>Welcome to the surface of the sun</h2>
        </div>
        {/* <p className="App-intro"> */}
          Current temperature at surface level: 
          <Readout unit='f' temperature={this.state.theNumber}  />
        {/* </p> */}
        <DisButton 
        title="Press here to explore"
        handleClick={this.__changeNumber}
         />
      </div>
    );
  }
  __changeNumber = () => {
    console.log("hey");
    const newNumber = this.state.theNumber * this.state.theNumber;
    this.setState({
      theNumber: newNumber
    });
  }
}

export default App;

