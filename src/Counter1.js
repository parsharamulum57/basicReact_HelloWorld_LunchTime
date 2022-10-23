
import React from 'react';



export default class Counter1 extends React.Component{

    
    shouldComponentUpdate(nextProp,nextState)
    {
        console.log("in shouldComponentUpdate ",nextProp,nextState)
        if(nextProp.count>10)
        {
            return false;
        }
        return true;
    }

    render()
    {
        console.log("render in counter1");
        return(
            <div className='counter1'>
                Count1:{this.props.count}
            </div>
        )
    }
}