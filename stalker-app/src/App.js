import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {count: 0, lotto: null}
  }

  increaseCount() {
    this.setState((old_st) => ({count: old_st.count+1}))
    //this.setState({count: this.state.count+1}) //<< Race
  }

  getLotto() {
    axios.get('/lucky-lotto').then((response) => {
      console.log(response.data.number)
      this.setState({lotto: response.data.number})
    })
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Click Me!"
          onClick={()=>this.increaseCount()}
        />
        Count: {this.state.count}
        <input
          type="button"
          value="Lotto!!!!"
          onClick={()=>this.getLotto()}
        />
        Lotto: {this.state.lotto}
      </div>
    );
  }

}

export default App;
