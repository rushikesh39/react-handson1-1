import React, { Component } from 'react'
import MyFunctionComponet from './Component/FunctionalComponent';
import MyClassComponent from './Component/ClassComponent';
import './index.css';

export class App extends Component {
  constructor(props){
    
      super(props);
      this.state={
        showFunctionalComponent: false,
        showClassComponent:false
      };
    
  }
  toggleFunc=()=>{
    this.setState((prevState)=>{
      return{
        showFunctionalComponent:!prevState.showFunctionalComponent
      }
    })

  };
  toggleClass=()=>{
    this.setState((prevState)=>{
      return{
        showClassComponent:!prevState.showClassComponent
      }
    })
  };
  render() {
    return (
        <div className="App">
          <h1 className='myHeading'>Style using Functional and Class Component</h1>
          <button onClick={this.toggleFunc}>To see styling in Functional Component</button>
          <button onClick={this.toggleClass}>To see styling in Class Component</button>
          
          { this.state.showFunctionalComponent && <MyFunctionComponet/>}
          { this.state.showClassComponent && <MyClassComponent/>}
        </div>
      
    )
  }
}

export default App
