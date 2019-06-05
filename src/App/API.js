import { Component } from 'react'

export default class API extends Component{

    static apiGet() {      
    const apiURL = 'https://whispering-tundra-15220.herokuapp.com/stats';
    // const queryString = this.formatQueryParams(data);
        const url = apiURL;

        const options = {
        method: 'GET',
        headers: {
            
            "Content-Type": "application/json"
        }
        };

    return fetch(url, options)
    }

    static apiPOST(trail) {
        const apiURL = 'https://whispering-tundra-15220.herokuapp.com/stats';
        const options = {
            method: 'POST',
            body: JSON.stringify(trail),
            headers: {
                'content-type':'application/json',
            }
        };
        // console.log(options.body)
        return fetch(apiURL, options)
    }

}

