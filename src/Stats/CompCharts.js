import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2'

export default class CompCharts extends Component{
    // constructor(){
    //     super();
    // }

    render() {
        // console.log(this.props.stats)

        let convertToSec = (ms) => {
            return (ms/1000).toFixed(2);
        } 

        // let formatDec = (num) => {
        //     if(num){
        //        return num.toFixed(2); 
        //     }
            
        // }
        
        return (
            <>
            <div className="colors-charts card">
                <Pie
                    data={{
                        labels: ['red', 'blue', 'yellow'],
                        datasets: [{
                            label: 'Amount hovered (colors)',
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
                                text:'Amount of hovers (colors)',
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
                            label: 'Second hovered (colors)',
                            data:[convertToSec(this.props.stats.redHoverTimeAvg), 
                                convertToSec(this.props.stats.blueHoverTimeAvg), 
                                convertToSec(this.props.stats.yellowHoverTimeAvg)],
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
                            data:[this.props.stats.oneHoverAmountAvg, 
                                this.props.stats.twoHoverAmountAvg, 
                                this.props.stats.threeHoverAmountAvg],
                            backgroundColor:[
                                'rgba(68,190,199, 0.6)',
                                'rgba(214,150,187, 0.6)',
                                'rgba(255,195,64, 0.6)',
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
                            data:[convertToSec(this.props.stats.oneHoverTimeAvg), 
                                convertToSec(this.props.stats.twoHoverTimeAvg), 
                                convertToSec(this.props.stats.threeHoverTimeAvg)],
                            backgroundColor:[
                                'rgba(68,190,199, 0.6)',
                                'rgba(214,150,187, 0.6)',
                                'rgba(255,195,64, 0.6)',
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