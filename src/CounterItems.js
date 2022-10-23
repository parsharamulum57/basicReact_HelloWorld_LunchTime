


import React from 'react';
import './CounterItems.css'
import Counter1 from './Counter1';
import Counter2 from './Counter2';


export default class CounterItems extends React.Component{

    
    constructor()
    {
        super();
        this.state = {
            count: 0,
           // firstTime: 0
            
        }
       this.firstTime= 0;
       this.timeId=-1;
    }

    componentDidMount(){
        if(this.firstTime===0)
        {
            this.firstTime=1;;
            console.log('In componentDidMount ',this.state.count);
            this.timeId=setInterval(() => {
            this.setState((prevState) => {
                return {
                    count: prevState.count+1
                }
            });
        },1000);
        }
    }

    play=() => {

        console.log("in play function",this.timeId);

        if(this.timeId===-1)
        {
            this.timeId=setInterval(() => {
                this.setState((prevState) => {
                    return {
                        count: prevState.count+1
                    }
                });
            },1000);
        }

    }

    pause=() => {

        console.log("in pause function",this.timeId);
        
        if(this.timeId!==-1)
        {      
            clearInterval(this.timeId);
            this.timeId=-1;
        }
    }

    render()
    {
        console.log("render");
        return(
            <div className='counters'>
                <Counter1 className='counter1'
                    count={this.state.count}
                />
            
                <Counter2 className='counter2'
                    count={this.state.count}
                />

                <button onClick={this.pause}>
                    Pause
                </button>
                <br></br>
                <br></br>
                <button onClick={this.play}>
                    Play
                </button>
            </div>
        )
    }
}