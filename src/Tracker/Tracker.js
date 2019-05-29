import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export default function Tracker(props) {

    const teams = ['red',' blue',' yellow']

    return (

        <>
        <header className="App-header">
            test Tracker page
        </header>
        <section className='TrackPage'>
            <div className='splash'>
                {teams.map( team => 
                    <button>
                        <NavLink
                            className='Team-Button'
                            to={`/about`}>

                            {team}
                        </NavLink>
                    </button>)}
            </div>
        </section>
        </>
    )
}