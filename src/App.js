import React, { Component } from 'react';
import './App.css';
import NavBar from './Component/navbar';
import Counters from './Component/counters';
class App extends Component {
  state = { 
    counts:[
        {id:1,value:0},
           { id:2,value:4},
            {id:3,value:0},
            {id:4,value:0}
       
    ]
 };
 //Componet life cycle phase 1
 constructor(){
   super();
   //constructor only call once when an instance of a class is created.
  //Right place to initializing the properties in that instance or in this class. e.g this.state = this.props.something
  // to accessing the props properties we must define props in constructor and super
 }

 componentDidMount(){
   //is called after our component is rendered into the dom
   //it is right place to call ajax to get data from the server. e.g this.setState({list or etc.})
 }


 handleDelete= counterId => {
   const count = this.state.counts.filter(remove => remove.id !== counterId)
   this.setState({counts:count});
 };

 handleIncrement=(countr) => {
       const increment = [...this.state.counts];
       const index = increment.indexOf(countr);
       increment[index]={...countr};
       increment[index].value++;
        this.setState({counts:increment});
 }
 handleReset= () => {
    const rest= this.state.counts.map(rst => {
        rst.value=0;
        return rst;
    });
    this.setState({counts:rest});
 };
  render() { 
    return ( 
    <React.Fragment>
    <NavBar totalNumberCount={this.state.counts.filter(cnt=>cnt.value>0).length}></NavBar>
      <main className="container">
        <Counters onIncrement={this.handleIncrement} counts={this.state.counts} onDelete={this.handleDelete} onReset={this.handleReset}></Counters>
      </main>
      </React.Fragment>
      );
  }
}
 
export default App;
