
import React, { Component } from 'react';
import './App.css';
import { Route, Link , Redirect , Switch} from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'
import API from './API';
import Landing from '../Landing/Landing';
import Stats from '../Stats/Stats';
import Tracker from '../Tracker/Tracker';
import Oops from '../Oops/Oops';
import Cookies from 'universal-cookie';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import GoogleApiWrapper from './maps/Map';

const uuid = require('uuid/v4');


class App extends Component {
  constructor(){
    super();
    this.state = {
      ready:false,
      where: {lat:null,lng:null},
      error:null,
    }
  }

  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOur: 20000,
      maximumAge:60*60,
    };
    this.setState({ready:false})
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)
  }

  geoSuccess = (position) => {
    console.log(position)
    this.setState({
      ready:true,
      where: {
        lat:position.coords.latitude,
        lng:position.coords.longitude
      }
    })
  }

  geoFailure = (err) => {
    this.setState({error:err.message});
  }

  

  render() {
const cookies = new Cookies();

const statsPage = (props) => {
    return (
      <Stats where={this.state.where} {...props}/> 
    )
  }

sessionStorage.setItem('sessionId', uuid());

cookies.set('cookie', sessionStorage.getItem('sessionId'))
    return (
      <div className="App">
        
        <main>
          <Switch>
            <Route exact path='/' component={Tracker}/>
            <Route exact path='/about' component={Landing}/>
            <Route exact path='/stats' component={statsPage}/>
            <Route exact path='/404' component={Oops}/>
            <Redirect to='/404' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
