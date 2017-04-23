import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store  from '../reducers/store';
import { INCREMENT, increment } from '../actions';


class App extends Component {
  onButton1Click(){
    this.props.increment(1);
  }

  onButtonClick2(){
    console.log("Dispatching...");
    store.dispatch(increment(1));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux Boilerplate!</h2>
        </div>
        <p className="App-intro">
          Code repository contains basic setup for a <code> React Redux app with React-Router, React-Boostrap </code>
        </p>
        <Button onClick={this.onButton1Click.bind(this)}> Click me to increment using the connect function! </Button>
        <br/>
        <br/>
        <Button onClick={this.onButtonClick2.bind(this)}> Click me to increment using the store.dispatch function! </Button>
        <br/>
        <br/>
        <p> The current state count is: {this.props.number} </p> 

      </div>
    );
  }
}

function mapStateToProps({ number }){
  return { number };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ increment }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
