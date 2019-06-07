import React, {Component} from 'react';
import './Stats.css';
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

//  <GoogleApiWrapper 
//                 where={this.props.where}/>

// AIzaSyCRnCMg1_k2kYJYPc3-E9faZNerjnT31Hg
  
    render(){
       //  console.log();
         return (
        <section className='LandingPage'>
         
            <div className='stat-main'>
                <h3>Session Stats</h3> 
                <div>
                  <p>
                  {this.props.stats.time/1000} second(s) to choose {this.props.stats.pressed.color}in position:{this.props.stats.pressed.position} 
                  </p>                  
                  <p>{(this.props.mobile) ? "Mobile browser used" : "Desktop browser used"}</p>
                </div>

                <div >
                  Session Location
                  <img 
                  className="map"
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.where.lat},${this.props.where.lng}&zoom=11&size=640x150&${(this.props.mobile) ? "scale=1" : "scale=2"}&maptype=roadmap&key=AIzaSyCRnCMg1_k2kYJYPc3-E9faZNerjnT31Hg`} 
                  alt="map goes here"
                  />
                </div>
            </div>
           
            {console.log(this.props.where)}
          
            <div className="data-container">
              <div className="user-data card-holder">
                <div className="holder-title">Session Data</div>
                <Charts 
                  stats={this.props.stats}/>
              </div>
              <div className="comp-data card-holder">
              <div className="holder-title">Global Average Data</div>
                <CompCharts 
                  stats={this.props.compStats}
                  />
              </div>
               
            </div>

            
        </section>
    )
    }
   
}