import randomWord from 'random-words';
import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title";
import Left from "./components/Left";
import Right from "./components/Right";

class App extends Component {
  state = {
    title: "",
    category: "", //"",food, kittens or dogs
    results: [] 
    
  }
  
  changeTitle = () => {
    const random = randomWord();
    const firstL = random.charAt(0).toUpperCase();
    const restOfWord = random.substring(1);
    this.setState({
      title: firstL+restOfWord,
      category: "",
      results: []
    })
  }
  
  handleButtonClick = newCat => {
    this.setState({
      category: newCat
    })
    
    // call function to get new results & update that state
    this.makeApiCall(newCat);
  }
  
  makeApiCall = searchQuery => {
    const URL = `https://api.giphy.com//v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&limit=1`;
    axios.get(URL).then(res =>{
      this.setState({
        results: res.data.data
      })
    })
  }
  
  render() {
    return (
    <div className="container" style={{marginTop: 20}}>
      <div className="row">
        <div className="col-sm-8">
          <Title anyPropName={this.state.title}/>
        </div>
        <div className="col-sm-4">
          <button className ="btn btn-primary" onClick = {this.changeTitle}> Change Title </button>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          <Left borderColor="red" category={this.state.category} handleButtonClick={this.handleButtonClick}/>
        </div>
        <div className='col-sm-6'>
          <Right borderColor="black" category={this.state.category} results={this.state.results}/>
        </div>
      </div>
    </div> 
    );
  }
}

export default App;
