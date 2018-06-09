import randomWord from 'random-words';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
// import Left from "./components/Left";
// import Right from "./components/Right";

class App extends Component {
  state = {
    title: ""
  }
  changeTitle = () => {
    this.setState({
      title: randomWord()
    })
  }
  render() {
    return (
    <div>
     <Title anyPropName={this.state.title}/>
      {/* <Left />
      <Right /> */}
      <button
      onClick = {this.changeTitle}
      > 
        Change Title 
      </button>
    </div> 
    );
  }
}

export default App;
