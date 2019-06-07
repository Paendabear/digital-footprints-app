
import React, { Component } from 'react';
import './App.css';
import { Route, Redirect , Switch} from 'react-router-dom'

import API from './API';
import Landing from '../Landing/Landing';
import Stats from '../Stats/Stats';
import Tracker from '../Tracker/Tracker';
import Oops from '../Oops/Oops';
import Cookies from 'universal-cookie';

// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

const uuid = require('uuid/v4');


class App extends Component {
  constructor(){
    super();
    this.state = {
      timeStart: null,
      ready:true,
      buttons:{
        pressed: {},
        hoverStats: {
          colors:{
            blue:{
                amount:0,
                time:0
              },
              red:{
                amount:0,
                time:0
              },
              yellow:{
                amount:0,
                time:0
              }
          },
          positions:{
              '1':{
                amount:0,
                time:0
              },
              '2':{
                amount:0,
                time:0
              },
              '3':{
                amount:0,
                time:0
              }
          }
      },
      },
      session:{
        id:null,
        timeAlive:0,
        where: {lat:null,lng:null},
        mobile: null,
        log:{
        }
      },
      compStats: {},
      error:null,
    }
  }

  mobilecheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

  componentDidMount() {

    // console.log(this.state)
    
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge:60*60,
    };
    this.setState({ready:false})
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)
    this.setState({
      session:{
        where:this.state.session.where,
        mobile:this.mobilecheck(),
        log:{...this.state.session.log,
          load:Date.now(),
        }
      }
    })
  }

  geoSuccess = (position) => {
    //console.log(position)
    let timestamp = position.timestamp;
    this.setState({
      timeStart:timestamp,
      ready:true,
      session: {
        where:{
        lat:position.coords.latitude,
        lng:position.coords.longitude
        },
        mobile:this.state.session.mobile,
        log:{...this.state.session.log,
          'geosuccess':timestamp}
      }
    })
  }

  geoFailure = (err) => {
    // console.log(err)
    this.setState({
      error:err.message,
      session: {
        where:{
        lat:null,
        lng:null
        },
        mobile:this.state.session.mobile,
        log:{...this.state.session.log,
          'geofailure':Date.now()}
      }
    });
  }

  onButtonHover = (hovered) => {
    let newState = {...this.state};
    newState.buttons.hoverStats.colors[hovered.color].amount ++;
    newState.buttons.hoverStats.positions[hovered.position].amount ++;
    newState.session.log = {...newState.session.log,
        [`num(${newState.buttons.hoverStats.colors[hovered.color].amount})"${hovered.color} ${hovered.position} press/hover on"`]:Date.now(),
      }
    this.setState({
      newState
  })
  }

  onHoverOff = (e) => {
    // console.log(e.target.className)

  }

  onButtonClick = (clicked, hoverStats, logs, id) => {
    this.updateState();


    let trail = {
      sessionId : id,
      mobile: this.state.session.mobile, 
      sessionTime:(Date.now() - this.state.timeStart), 
      lat: this.state.session.where.lat,  
      lng: this.state.session.where.lng, 
      buttonPressed: `${clicked.color} ${clicked.position}`,
      redHoverTime: this.state.buttons.hoverStats.colors.red.time, 
      redHoverAmount: this.state.buttons.hoverStats.colors.red.amount,
      blueHoverTime: this.state.buttons.hoverStats.colors.blue.time, 
      blueHoverAmount: this.state.buttons.hoverStats.colors.blue.amount,
      yellowHoverTime: this.state.buttons.hoverStats.colors.yellow.time, 
      yellowHoverAmount: this.state.buttons.hoverStats.colors.yellow.amount,
      oneHoverTime: this.state.buttons.hoverStats.positions[1].time, 
      oneHoverAmount: this.state.buttons.hoverStats.positions[1].amount,
      twoHoverTime: this.state.buttons.hoverStats.positions[2].time, 
      twoHoverAmount: this.state.buttons.hoverStats.positions[2].amount,
      threeHoverTime: this.state.buttons.hoverStats.positions[3].time, 
      threeHoverAmount: this.state.buttons.hoverStats.positions[3].amount,
      metaLog:"test",
    }

    API.apiPOST(trail)
    API.apiGet()
    .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => { 
      
        this.setState({
          buttons:{
            pressed:clicked,
            hoverStats,
          },
          session:{
            id:id,
            timeAlive: (Date.now() - this.state.timeStart),
            where:this.state.session.where,
            mobile:this.mobilecheck(),
            log:{
              [`"${clicked.color} ${clicked.position}" press`]: Date.now(),
              ...logs,
            }
          },
          compStats: data,
        })

        console.log(data);
        console.log(this.state.compStats)
        return (Stats)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  // console.log(trail)

    }

  updateState = () => {
    this.setState({...this.state})
  }

render() {

  const cookies = new Cookies();

  const statsPage = (props) => {
      return (
        <Stats 
        where={this.state.session.where}
        stats={{
          time: this.state.session.timeAlive,
          mobile: this.state.session.mobile,
          pressed: this.state.buttons.pressed,
          redHoverTime: this.state.buttons.hoverStats.colors.red.time, 
          redHoverAmount: this.state.buttons.hoverStats.colors.red.amount,
          blueHoverTime: this.state.buttons.hoverStats.colors.blue.time, 
          blueHoverAmount: this.state.buttons.hoverStats.colors.blue.amount,
          yellowHoverTime: this.state.buttons.hoverStats.colors.yellow.time, 
          yellowHoverAmount: this.state.buttons.hoverStats.colors.yellow.amount,
          oneHoverTime: this.state.buttons.hoverStats.positions[1].time, 
          oneHoverAmount: this.state.buttons.hoverStats.positions[1].amount,
          twoHoverTime: this.state.buttons.hoverStats.positions[2].time, 
          twoHoverAmount: this.state.buttons.hoverStats.positions[2].amount,
          threeHoverTime: this.state.buttons.hoverStats.positions[3].time, 
          threeHoverAmount: this.state.buttons.hoverStats.positions[3].amount,
        }}
        compStats={{...this.state.compStats[0]}}
        mobile={this.state.session.mobile}
        {...props}/> 
      )
  }

  const trackPage = (props) => {
    return (
      <Tracker 
      id={sessionId}
      handleClick={this.onButtonClick}
      handleHover={this.onButtonHover}
      hoverOff={this.onHoverOff}
      hoverStats={this.state.buttons.hoverStats}
      log={this.state.session.log}
      {...props}
      />
    )
  }

  const landingPage = (props) => {
    return(
      <Landing 
        mobile={this.state.session.mobile}
        {...props}
      />
    )
    }

  // console.log(this.state)

  sessionStorage.setItem('sessionId', uuid());
  let sessionId = sessionStorage.getItem('sessionId')
  cookies.set('cookie', sessionId)

      return (
        <div className="App">
          
          <main>
            <Switch>
              <Route exact path='/' component={trackPage}/>
              <Route exact path='/about' component={landingPage}/>
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
