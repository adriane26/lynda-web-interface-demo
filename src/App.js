import React, { Component } from 'react';
import Header from './components/Header';
import AppointmentsList from './components/AppointmentsList';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div className="App">
    		< Header />
    		< AppointmentsList />
    	</div>
    );
  }
}

export default App;
