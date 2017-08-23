import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

function AnyReactComponent({ text }) {
    return <div>{text}</div>;
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 13.7563, lng: 100.5018},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={13.7563}
          lng={100.5018}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}

export default class Stalker extends Component {
  render() {
    return (
      <div style={{height: 500, width: 500}}>
        <SimpleMap />
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
