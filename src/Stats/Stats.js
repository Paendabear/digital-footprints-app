import React, {Component} from 'react';

import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'
import API from '../App/API';
import GoogleApiWrapper from '../maps/Map';
import Charts from './Charts';


export default class Stats extends Component {
    constructor(){
        super();
    }
    

    getStats = () => {
    let Stats = {}
    API.apiGet()
    .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => { 
        Stats.data = data;
        console.log(data);
        console.log(Stats)
      })
    //   .catch(err => {
    //     this.setState({
    //       error: err.message
    //     });
    //   })
    ;
    }
    

    componentDidMount() {
        // API.apiPost({name:'test2', type:'folders'});
        this.getStats();
        console.log(this.props.where)


      }


    render(){
         return (
        <section className='LandingPage'>
            <div className='splash'>
                test stats page 
                
                {console.log(Stats.data)}
                {JSON.stringify(Stats)}
            </div>
            {console.log(this.props.where)}
            <Charts 
              stats={this.props.stats}/>
            <GoogleApiWrapper where={this.props.where}/>
        </section>
    )
    }
   
}