
import React, { Component } from 'react';
import config from '../config';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(){
    super();
}

  render() { 

    console.log(config.MAP_API_KEY)
    {console.log(this.props.where)}
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={this.props.where}
      >
       
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              {/* <h1>{this.state.selectedPlace.name}</h1> */}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: config.MAP_API_KEY
    
  })(MapContainer)