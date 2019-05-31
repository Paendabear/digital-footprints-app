import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export default function Tracker(props) {

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
      let i = 1;
    //   console.log(props);
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
                            onClick={props.handleClick}
                            onMouseOver={props.handleHover}
                            onMouseOut={props.hoverOff}
                            onTouchStart={props.handleHover} 
                            onTouchEnd={props.hoverOff} 
                            >

                            {team}
                        </NavLink>
                    </button>)}
            </div>
        </section>
        </>
    )
}