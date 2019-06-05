import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'

export default class Charts extends Component{
    constructor(){
        super();
    }

    render() {
        console.log(this.props.stats)
        return (
            <>
            <div className="colors-charts">
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
                                text:'amount of hovers',
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
                        labels: ['red', 'blue', 'yellow'],
                        datasets: [{
                            label: 'time hovered',
                            data:[this.props.stats.redHoverTime, 
                                this.props.stats.blueHoverTime, 
                                this.props.stats.yellowHoverTime],
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
                                text:'time hovered',
                            } ,
                            legend:{
                                display:true,
                                position:'left',
                            }
                        }
                    }
                />
            </div>

            <div className="positions-charts">
                <Bar
                    data={{
                        labels: ['one', 'two', 'three'],
                        datasets: [{
                            label: 'Amount hovered',
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
                                text:'amount of hovers',
                            } ,
                            legend:{
                                display:true,
                                position:'right',
                            }
                        }
                    }
                />

                <Pie
                    data={{
                        labels: ['one', 'two', 'three'],
                        datasets: [{
                            label: 'time hovered',
                            data:[this.props.stats.oneHoverTime, 
                                this.props.stats.twoHoverTime, 
                                this.props.stats.threeHoverTime],
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
                                text:'time hovered',
                            } ,
                            legend:{
                                display:true,
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