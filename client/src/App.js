import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Perspective from './components/Perspective/Perspective'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/perspective" component={Perspective} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
