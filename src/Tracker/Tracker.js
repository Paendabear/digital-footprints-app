import React , {Component} from 'react';
import { NavLink, Link } from 'react-router-dom'

export default class Tracker extends Component {
    constructor() {
        super();
    }
    

componentDidMount() {
    
}

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
        function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            return array;
        }
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
    console.log(log)
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
        
        <>
        <header className="">
            test Tracker page
        </header>
        <section className='TrackPage'>
            <div className='splash'>
                {rTeams.map( team => 
                    <button  
                        className="team-button" 
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
                    </button>)}
            </div>
        </section>
        </>
    )

    }
}