import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppStore from './AppStore';

class App extends Component {
  store = new AppStore;

  componentDidMount() {
    this.store.runit();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
