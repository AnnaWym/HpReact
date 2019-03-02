import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
