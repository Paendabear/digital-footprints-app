import React, {Component} from 'react';
import {Bar,Pie} from 'react-chartjs-2'

export default class Charts extends Component{
    // constructor(){
    //     super();
    // }

    render() {
        let convertToSec = (ms) => {
            return (ms/1000).toFixed(2);
        } 

        // .convertToSec()
        // console.log(this.props.stats)
        return (
            <>
            <div className="colors-charts card">
                <Pie
                    data={{
                        labels: ['red', 'blue', 'yellow'],
                        datasets: [{
                            label: 'Amount hovered',
                            data:[this.props.stats.redHoverAmount, 
                                this.props.stats.blueHoverAmount, 
                                this.props.stats.yellowHoverAmount],
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                            ],
                        }]
                    }}
                    width={100}
                    height={50}
                    options={
                        { 
                            title:{
                                display:true,
                                text:'Amount of hovers (colors)',
                            } ,
                            legend:{
                                display:true,
                                position:'right',
                            },

                        }
                    }
                />

                <Bar
                    data={{
                        labels: ['red', 'blue', 'yellow'],
                        datasets: [{
                            label: 'time hovered (colors)',
                            data:[convertToSec(this.props.stats.redHoverTime), 
                                convertToSec(this.props.stats.blueHoverTime), 
                                convertToSec(this.props.stats.yellowHoverTime)],
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.6)',
                                'rgba(54, 162, 235, 0.6)',
                                'rgba(255, 206, 86, 0.6)',
                            ],
                        }]
                    }}
                    width={100}
                    height={50}
                    options={
                        { 
                            title:{
                                display:true,
                                text:'Second(s) hovered (colors)',
                            } ,
                            legend:{
                                display:false,
                                position:'left',
                            }
                        }
                    }
                />
            </div>

            <div className="positions-charts card sLock">
                <Pie
                    data={{
                        labels: ['one', 'two', 'three'],
                        datasets: [{
                            label: 'Amount hovered (positions)',
                            data:[this.props.stats.oneHoverAmount, 
                                this.props.stats.twoHoverAmount, 
                                this.props.stats.threeHoverAmount],
                            backgroundColor:[
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                            ],
                        }]
                    }}
                    width={100}
                    height={50}
                    options={
                        { 
                            title:{
                                display:true,
                                text:'Amount of hovers (positions)',
                            } ,
                            legend:{
                                display:true,
                                position:'right',
                            }
                        }
                    }
                />

                <Bar
                    data={{
                        labels: ['one', 'two', 'three'],
                        datasets: [{
                            label: 'time hovered (positions)',
                            data:[convertToSec(this.props.stats.oneHoverTime), 
                                convertToSec(this.props.stats.twoHoverTime), 
                                convertToSec(this.props.stats.threeHoverTime)],
                            backgroundColor:[
                                'rgba(75, 192, 192, 0.6)',
                                'rgba(153, 102, 255, 0.6)',
                                'rgba(255, 159, 64, 0.6)',
                            ],
                        }]
                    }}
                    width={100}
                    height={50}
                    options={
                        { 
                            title:{
                                display:true,
                                text:'Second(s) hovered (positions)',
                            } ,
                            legend:{
                                display:false,
                                position:'left',
                            }
                        }
                    }
                />
            </div>

            </>
        )
    }
}

// ChartData:{
//     labels: [],
//     datasets: [{
//         label: '',
//         data:[],
//         backgroundColor:[],
//     }]
// }