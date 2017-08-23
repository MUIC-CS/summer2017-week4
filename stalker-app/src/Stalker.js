import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'
function Prey({ name }) {
  const style = {
    position: 'absolute',
    background:'red',
    color:'white',
    padding: 10,
    borderRadius: 10
  }
    return (<div
        style={style}
      >
        {name}
      </div>);
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 13.7563, lng: 100.5018},
    zoom: 11
  };

  render() {
    const {prey} = this.props
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {Object.keys(prey).map(name => {
          return <Prey name={name} lat={prey[name].lat} lng = {prey[name].lng} />
        })}
      </GoogleMapReact>
    );
  }
}

export default class Stalker extends Component {
  constructor(props){
    super(props)
    this.state = {
      prey : {}
    }
  }

  updatePrey() {
    axios.get('/prey-list').then(res => {
      this.setState({prey: res.data})
    })
  }

  componentDidMount() {
    this.updatePrey()
  }

  render() {
    const {prey} = this.state
    return (
      <div style={{height: 500, width: 500}}>
        <SimpleMap prey={prey}/>
      </div>
    )
  }
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
