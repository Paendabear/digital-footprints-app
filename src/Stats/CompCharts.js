import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'

export default class CompCharts extends Component{
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
                            data:[this.props.stats.redHoverAmountAvg, 
                                this.props.stats.blueHoverAmountAvg, 
                                this.props.stats.yellowHoverAmountAvg],
                            backgroundColor:[
                                'rgba(255,71,71, 0.6)',
                                'rgba(14,104,206, 0.6)',
                                'rgba(238,220,49, 0.6)',
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
                            data:[this.props.stats.redHoverTimeAvg, 
                                this.props.stats.blueHoverTimeAvg, 
                                this.props.stats.yellowHoverTimeAvg],
                            backgroundColor:[
                                'rgba(255,71,71, 0.6)',
                                'rgba(14,104,206, 0.6)',
                                'rgba(238,220,49, 0.6)',
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
                            data:[this.props.stats.oneHoverAmountAvg, 
                                this.props.stats.twoHoverAmountAvg, 
                                this.props.stats.threeHoverAmountAvg],
                            backgroundColor:[
                                'rgba(68,190,199, 0.6)',
                                'rgba(214,150,187, 0.6)',
                                'rgba(255,195,0, 0.6)',
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
                            data:[this.props.stats.oneHoverTimeAvg, 
                                this.props.stats.twoHoverTimeAvg, 
                                this.props.stats.threeHoverTimeAvg],
                            backgroundColor:[
                                'rgba(68,190,199, 0.6)',
                                'rgba(214,150,187, 0.6)',
                                'rgba(255,195,0, 0.6)',
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