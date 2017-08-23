import React, { Component } from 'react';
import axios from 'axios'

function NameBox({name, onNameChange}) {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e)=>onNameChange(e.target.value)}
      />
      <img
        src={`https://robohash.org/${name}`}
        style={{height:200, width:200}}
      />
    </div>
  )
}


export default class Versus extends Component {
  constructor(props){
    super(props)
    this.state = {
      player1: '',
      player2: ''
    }
  }

  onPlayer1NameChange(newName) {
    this.setState({player1: newName})
  }

  render() {
    return (
      <div>
        <NameBox
          name={this.state.player1}
          onNameChange={(n)=>this.onPlayer1NameChange(n)}
        />
      </div>)
  }
}
//
//
///
//
//
//
///
