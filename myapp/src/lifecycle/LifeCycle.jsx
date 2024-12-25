import React, { Component } from 'react'

export default class LifeCycle extends Component {
    state={value:0};
    constructor(){
        super()
        console.log("i am constructor")
        this.state ={value:0}
    }

    componentDidMount(){
        console.log("mounting phase")
        this.s1=setInterval(()=>{
            console.log("hello")
        },2000)
    };
    componentDidUpdate(){
        console.log("updating phase")
    }
    componentWillUnmount(){
        console.log("UnMount phase")
        
    }
    getSnapshotBeforeUpdate(props,state){
        console.log("befor the update state was: ", state)
        return null
    }
  render() {
    console.log("i am render method")
    return (
      <div>
        <h1> Learn React life Cycle method in react   {this.state.value}</h1>
        <button onClick={()=>this.setState({value:this.state.value+1})}> Click</button>
      </div>
    )
  }
}
