import React, { Component } from 'react';

class Counter extends Component {  
  componentDidUpdate(prevProps,prevState){
    console.log("previous props",prevProps);
    console.log("previous state",prevState);
    /* if(prevProps.count.value !== this.prevProps.count.value){
      //"ajax call and get the new data from the server"
    } */
  } 
  componentWillUnmount(){
    console.log("Counter-Unmount");
  }
  render() {
        console.log("conunter-redered"); 
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
