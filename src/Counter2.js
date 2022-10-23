
import React from 'react';



export default class Counter2 extends React.Component{

    

    render()
    {
        console.log("render in counter2");
        return(
            <div className='counter2'>
                Counter2:{this.props.count}
            </div>
        )
    }
}