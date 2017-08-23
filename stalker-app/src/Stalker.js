import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

function AnyReactComponent({ text }) {
    return <div>{text}</div>;
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
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
