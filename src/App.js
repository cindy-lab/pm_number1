
import React, { Component } from 'react';
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "",
      word: '',
      count: 0,
      occurrence: 0,
      array: []

    };
  }

  inputHandler = (event) => {
    const { sentence, word, array } = this.state;
    array.push(sentence);
    var sen = array[Math.floor(Math.random() * array.length)];
    var sSplit = sen.split(" ");
    this.setState({ count: sSplit.length });
    var cntr = 0;
    for (let i = 0; i < sSplit.length; i++) {
      if (sSplit[i] === word) {
        cntr += 1;
      }
    }
    this.setState({ occurrence: cntr });
  }

  render() {
    const { sentence, word, count, occurrence } = this.state;
    return (
      <form>
    <div class="center">
      <br/><br/>
      <h1>Word Frequency Count </h1>
      <hr/>
      <label>Sentence:</label><input placeholder="input sentence here..."onChange={event => this.setState({ sentence: event.target.value })}></input>
      &nbsp; &nbsp;
      <label>Words:</label> <input placeholder="input words here..." onChange={event => this.setState({ word: event.target.value })}></input>
      &nbsp;      
       <button onClick={event => this.inputHandler(event)}>Count</button>
      <div>
      <br/><br/>
      <label>Inputed text:</label>{sentence}</div>
      <div>
        </div>
        <label>words:</label>{count}
        <div>
        <label>word occurrence:</label>{word} : {occurrence}</div>
    </div>
    </form>
    );    
  }
}
export default App;

