import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
       <Header/>
       <div class="borderimg"></div>
       <Main />
       <Footer/>
    </div>
    )
}}

export default App;
