import React , {Component} from 'react';
import './Tracker.css';
import { NavLink, Link } from 'react-router-dom'

export default class Tracker extends Component {
    constructor() {
        super();
    }
    

// componentDidMount() {
    
// }

    getButton = (e) => {
          let clicked = {};
        let event = e.target.className.split(" ");
        return clicked = {
          color : event[0],
          position: event[1]
        }
      }

    render(){
        const teams = ['red','blue','yellow']
        function shuffle(arr) {
            var i,
                j,
                temp;
            for (i = arr.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            return arr;    
        };
        let rTeams = shuffle(teams);

        let timeHovers={
            red:0,
            blue:0,
            yellow:0,
            '1':0,
            '2':0,
            '3':0,
        }
        let log = {...this.props.log}
        let hoverStats = {...this.props.hoverStats}

        let hoverTrack = (color,position) => {
        hoverStats.colors[color].amount ++;
        hoverStats.positions[position].amount ++;
      }
 let hoverOff = (e) => {
    let hovered = this.getButton(e);

    hoverStats.colors[hovered.color].time += (Date.now() - timeHovers[hovered.color])
    hoverStats.positions[hovered.position].time += (Date.now() - timeHovers[hovered.position])
    log = {...log,
        [`num(${hoverStats.colors[hovered.color].amount})"${hovered.color} ${hovered.position}" hover off`]:Date.now(),};
    // console.log(log)
    };

 let handleHover = (e) => {

    let hovered = this.getButton(e);
    



    // console.log(hoverStats)
    // console.log(log)


    hoverTrack(hovered.color, hovered.position)
    timeHovers[hovered.color] = Date.now();
    timeHovers[hovered.position] = Date.now();

    log = {...log,
            [`num(${hoverStats.colors[hovered.color].amount})"${hovered.color} ${hovered.position}" hover on`]:Date.now(),}
    };

    let handleOnClick = (e) => {
        let clicked = this.getButton(e);
        this.props.handleClick(clicked, hoverStats, log, this.props.id);
    };

    let i = 1;
        return (
        
        <div id="main">
        <header className="splash">
            Choose a side.
        </header>
        <section className='TrackPage'>
            <div className='team-section'>
                <ul>
                    {rTeams.map( team => 
                        <li className="team">
                            <button  
                                className={`team-button ${team}`} 
                                >
                                <NavLink
                                    className={`${team} ${i++}`}
                                    to={`/about`}
                                    onClick={handleOnClick}
                                    onMouseOver={handleHover}
                                    onMouseOut={hoverOff}
                                    onTouchStart={handleHover} 
                                    onTouchEnd={hoverOff} 
                                    >
                                    {team}
                                </NavLink>
                            </button>
                        </li>)}
                </ul>
            </div>
        </section>
        </div>
    )

    }
}