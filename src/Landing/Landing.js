import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './Landing.css';

import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'
// import PropTypes from 'prop-types'

export default function Landing(props) {

    return (
        <div className='LandingPage'>
            <section>
                <header role="banner">
                    <h1>Digital footprints</h1>
                    <h2>See yours</h2>
                </header>
    
                <div className='title'>
                    <p>[<em>placeholder for popular free websites/apps ie. facebook, google, amazon, youtube</em>]</p>
                    <p>
                        The second one lands on a webpage it is "listening" to what you are doing mouse-clicks, taps, scrolls, zoom-in, zoom-outs, anything one does to use the website only works because the webpage/app listens for those things.
                    </p>
                    <p>
                        Websites/apps are also capable of tracking all the things that the website is "listening" for. 
                    </p>
                </div>
            </section>

            <section>
                <div>
                    <header>
                        <h3>Data and what it means to you</h3>
                    </header>
                    <p>
                        When you sign up for an account on any website there is a "General Data Protection Regulation" so you can rest assured that your footprints will be hard to attain for any hacker.
                    </p>
                    <p>
                        Although that does not stop the app your signing up for from tracking and logging your meta-data for their own private enterprise.
                    </p>
                </div>
            </section>

            <section>
                <div>
                    <header>
                        <h3>Please spread the word</h3>
                    </header>
                    <p>
                        If you learned something new today, or feel like more people should know about our digital footprints please share
                    </p>
                    <button>
                        share button
                    </button>
                </div>
            </section>

            <section>
                <div>
                    <header>
                        <h3>See what I have tracked</h3>
                    </header>
                    <button>
                        <NavLink
                            className="NavToStats"
                            to={`/Stats`}>
                                Stats
                        </NavLink>
                    </button>
                </div>
            </section>

        </div>
    )
}
