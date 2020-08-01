import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
   
    render() {
        console.log("Counters-rendered"); 
        const {onReset,onIncrement,onDelete,counts}= this.props;
        return ( 
        <div>
            <button className='btn btn-primary sm m-2' onClick={onReset}>Reset</button><br></br>
            {counts.map(count => <Counter key={count.id} onIncrement={onIncrement} onDelete={onDelete} count={count}></Counter>)}

        </div>
         );
    }
}
 
export default Counters;