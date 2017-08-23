import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
  render() {
    const prey = {
      'New': {lat: 13.7663, lng: 100.5018},
      'Bossy': {lat: 13.7663, lng: 100.7018}
    }
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
