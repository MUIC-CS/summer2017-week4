import React, { Component } from 'react';
import axios from 'axios'

function NameBox({name, onNameChange}) {
  return (
    <div>
      <input type="text" value={name} />
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
  }

  render() {
    return (<NameBox name="Piti"/>)
  }
}
