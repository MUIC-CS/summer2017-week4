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
      player2: '',
      battleResult: null
    }
  }

  onPlayer1NameChange(newName) {
    this.setState({player1: newName})
  }

  onPlayer2NameChange(newName) {
    this.setState({player2: newName})
  }

  battle(player1, player2) {
    //{player1: player1, player2: player2}
    axios.post('/versus', {player1, player2}).then(res => {
      console.log(res.data)
    })
  }

  render() {
    const {player1, player2} = this.state
    return (
      <div>
        <NameBox
          name={this.state.player1}
          onNameChange={(n)=>this.onPlayer1NameChange(n)}
        />
        <NameBox
          name={this.state.player2}
          onNameChange={(n)=>this.onPlayer2NameChange(n)}
        />
        <input
          type="button"
          value="Battle!!!!!"
          onClick={()=>this.battle(player1, player2)}
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
