
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

const uuid = require('uuid/v4');


class App extends Component {
  render() {
const cookies = new Cookies();

sessionStorage.setItem('sessionId', uuid());

cookies.set('cookie', sessionStorage.getItem('sessionId'))
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path='/' component={Tracker}/>
            <Route exact path='/about' component={Landing}/>
            <Route exact path='/stats' component={Stats}/>
            <Route exact path='/404' component={Oops}/>
            <Redirect to='/404' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
