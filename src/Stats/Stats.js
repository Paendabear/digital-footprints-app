import React, {Component} from 'react';

import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'
import API from '../App/API';
import GoogleApiWrapper from '../maps/Map';
import Charts from './Charts';
import CompCharts from './CompCharts';


export default class Stats extends Component {
    constructor(){
        super();
        this.state = {
          ready:false
        }
    }
    


    componentDidMount() {
        // this.getStats();
        console.log(this.props.compStats)


      }


    render(){

         return (
        <section className='LandingPage'>
            <div className='stat-main'>
                test stats page 
            </div>
            {console.log(this.props.where)}
            
            

            <div className="data-container">
              <div className="user-data">
                <Charts 
                  stats={this.props.stats}/>
              </div>
              <div className="comp-data">
                <CompCharts 
                  stats={this.props.compStats}
                  />
              </div>
            </div>

            <GoogleApiWrapper where={this.props.where}/>
        </section>
    )
    }
   
}