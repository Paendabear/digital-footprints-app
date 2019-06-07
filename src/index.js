import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter } from 'react-router-dom'
import {
    fab, faFacebookSquare, faGoogle, faYoutube,faRedditSquare
} from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookSquare, faGoogle, faYoutube,faRedditSquare)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

