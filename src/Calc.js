
import React from 'react';
import './Calc.css';


export default class Calc extends React.Component{

    constructor(){
        super();
        this.state={
            ans:0
        }
    }

    add=() => {
        this.setState({
            ans: this.state.ans+2
        })
    };

    square=() => {
        this.setState({
            ans: this.state.ans*this.state.ans
        })
    };

    divide=() => {
        this.setState({
            ans: this.state.ans/2
        })
    };


    render(){
        return (
            <div id='calc'>
                <div className='ans'>
                    <h2>{this.state.ans}</h2>
                </div>
                <div className='opeartions'>
                    <div className='add'>
                         <button onClick={this.add}>Add2!</button>
                    </div>
                    <div className='square'>
                         <button onClick={this.square}>Square!</button>
                    </div>
                    <div className='divide'>
                         <button onClick={this.divide}>Divide2!</button>
                    </div>
                </div>
            </div>
        )
        
    }
}