import React, {Component} from 'react';
import './Stats.css';

import Charts from './Charts';
import CompCharts from './CompCharts';

// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default class Stats extends Component {
    constructor(){
        super();
        this.state = {
          ready:false
        }
    }
    


    // componentDidMount() {
    //     // this.getStats();
    //     console.log(this.props.compStats)


    //   }

//  <GoogleApiWrapper 
//                 where={this.props.where}/>

// AIzaSyCRnCMg1_k2kYJYPc3-E9faZNerjnT31Hg
  
    render(){
       //  console.log();
         return (
        <section className='LandingPage'>
         
            <div className='stat-main sLock'>
                <div className="main-text">
                  <h2>Session Stats</h2> 
                  <div>
                    <p>
                    {this.props.stats.time/1000} second(s) to choose {this.props.stats.pressed.color} in position:{this.props.stats.pressed.position} 
                    </p>                  
                    <p>{(this.props.mobile) ? "Mobile browser used" : "Desktop browser used"}</p>
                  </div>
                </div>

                <div >
                  <h4 className="location-title">Session Location</h4>
                  <img 
                  className="map"
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.where.lat},${this.props.where.lng}&zoom=11&size=640x150&${(this.props.mobile) ? "scale=1" : "scale=2"}&maptype=roadmap&key=AIzaSyCRnCMg1_k2kYJYPc3-E9faZNerjnT31Hg`} 
                  alt="map goes here"
                  />
                </div>
            </div>
            {/* {console.log(this.props.where)} */}
            <div className="data-container">
              <div className="user-data card-holder sLock">
                <h3 className="holder-title">Session Data</h3>
                <Charts 
                  stats={this.props.stats}/>
              </div>
              <div className="comp-data card-holder sLock">
              <h3 className="holder-title">Global Average Data</h3>
                <CompCharts 
                  stats={this.props.compStats}
                  />
              </div>
            </div>

            <div className='closer'>
              <ul className="">
                  <li>© Paendabear 2019</li>
                  <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Paendabear">GITHUB</a>
                  </li>
              </ul>
            </div>
        </section>
    )
    }
}