import React, { Component } from 'react';
import './App.css';
import AppStore from './AppStore';
import { CppSample } from './Cpp/CppSample';

class App extends Component {
  store = new AppStore;

  componentDidMount() {
    // this.store.runit();
  }

  render() {
    return (
      <div className="App">
        <h3>3D Demo</h3>
        <select>
          <option defaultChecked>Web GL</option>
          <option>C++</option>
        </select>
        
        <CppSample />
      </div>
    );
  }
}

export default App;
