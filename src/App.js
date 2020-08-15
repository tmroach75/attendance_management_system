import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
import sqlite3 from './node_modules/sqlite3';

//const sqlite3 = require('sqlite3');

var database = firebase.database();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "Counter 1",
      isInEditMode: false,
      logNotes : ""
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    firebase.database().ref('attendance').push({
      category: this.state.title,
      timestamp: Date.now()
    })
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  clear = () => {
    // create an alert to make sure user wants to delete data, since
    // it will be removed from the database
    this.setState({ count: this.state.count = 0 })
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.setState.isInEditMode
    })
    console.log("should go to edit mode now")
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      title: this.refs.theTextInput.value
    })
  }

  renderEditView = () => {
    return <div>
      <input
        type="text" 
        defaultValue={this.state.title}
        ref="theTextInput"
      />
      <button onClick={this.updateComponentValue}>OK</button>
    </div>
  }

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>
      {this.state.title}
    </div>
  }

  render() {
    return (
      <div className="App">
          <h2>  
            {  
              this.state.isInEditMode ?
                this.renderEditView() :
                this.renderDefaultView()
            }
          </h2>
          <h2>{this.state.count}</h2>
          <input type="text" style={{ width: "150px" }} placeholder="Enter log notes here"></input>
          <p></p>
          <button onClick={this.increment} className="counter">+</button>
          <button onClick= {this.decrement} className="counter">-</button>
          <text> </text>
          <button onClick={this.clear} className="counter">Clear</button>
          <p></p>
      </div>
    );
  }
}

export default App;
