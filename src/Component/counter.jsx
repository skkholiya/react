import React, { Component } from 'react';

class Counter extends Component {  
    render() {
        console.log("props",this.props); 
      return( 
      <React.Fragment>
      <span className={ this.changeBadgeStyle()}>{this.incrementCount()}</span>
      <button className='btn btn-secondary btn-sm' onClick={()=>this.props.onIncrement(this.props.count)}>Increment</button>
    <button className='btn btn-danger btn-sm m-2' onClick={()=>this.props.onDelete(this.props.count.id)}>Delete</button>
     <br></br>
      </React.Fragment> //remove an extra div
      )}
       incrementCount() {
          const {value} = this.props.count;
          return value===0?'Zero':value;
        }

        changeBadgeStyle(){
            let bootstrapClass = "badge m-2 badge-";
            bootstrapClass+= this.props.count.value===0?"warning":"primary";
            return bootstrapClass;
        }
}
 
export default Counter;
