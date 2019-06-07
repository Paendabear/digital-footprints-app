import React from 'react';
import { NavLink,} from 'react-router-dom'
import './Landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default function Landing(props) {

    return (
        <div className='LandingPage'>
            <section className="slide">
                <header role="banner">
                    <h1>Digital footprints</h1>
                    <h2 className="sub-banner">See yours</h2>
                </header>
    
                <div className='title'>
                    <div className="svg-bin">
                    <FontAwesomeIcon icon={['fab', 'amazon']} />
                    <FontAwesomeIcon icon={['fab', 'google']} />
                    <FontAwesomeIcon icon={['fab', 'apple']} />
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                    <FontAwesomeIcon icon={['fab', 'reddit']} />
                    </div>
                    <p>
                        The second one lands on a webpage it is "listening" to what you are doing mouse-clicks, taps, scrolls, zoom-in, zoom-outs, anything one does to use the website only works because the webpage/app listens for those things.
                    </p>
                    <p>
                        Websites/apps are also capable of tracking all the things that the website is "listening" for. 
                    </p>
                </div>
            </section>

            <section className="slide">
                <div>
                    <header>
                        <h3 className="slide-title">Data and what it means to you</h3>
                    </header>
                    <p>
                        When you sign up for an account on any website there is a "General Data Protection Regulation" so you can rest assured that your footprints will be hard to attain for any hacker.
                    </p>
                    <p>
                        Although that does not stop the app your signing up for from tracking and logging your meta-data for their own private enterprise.
                    </p>
                </div>
            </section>

            <section className="slide">
                <div>
                    <header>
                        <h3 className="slide-title">Please spread the word</h3>
                    </header>
                    <p>
                        If you learned something new today, or feel like more people should know about our digital footprints please share
                    </p>
                    {/* <button>
                        share button
                    </button> */}
                </div>

                <div>
                    <header>
                        <h3>To see what I have tracked click the button below!</h3>
                    </header>
                    <button className="toStats">
                        <NavLink
                            className="NavToStats"
                            to={`/Stats`}>
                                Stats
                        </NavLink>
                    </button>
                </div>
            </section>

            {/* <section className="slide">
                
            </section> */}

        </div>
    )
}
