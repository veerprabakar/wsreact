import React, { Component } from 'react';
import './App.css';
import AppStore from './AppStore';
import { GoSample } from './Go/GoSample';

class App extends Component {
  store = new AppStore;

  componentDidMount() {
    // this.store.runit();
  }

  render() {
    return (
      <div className="App">
        <h3>Web Assembly</h3>
        <select>
          <option defaultChecked>Go</option>
          <option>Web GL</option>
        </select>
        
        <GoSample />
      </div>
    );
  }
}

export default App;
