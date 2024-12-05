// const { Component } = require("react");//! this is older method in react
import { Component } from "react";// Es6 method

class StateInCBC extends  Component {
    state={count:0};//initializing state

    updateState = ()=>{
        this.setState({ count:this.state.count + 1})
    }
    
    Decrement = ()=>{
        if (this.state.count > 0) {
            // this.setState({ count:0})
            this.setState({ count:this.state.count - 1})
        }        
    }
    Reset = ()=>{
        this.setState({ count:0})
    }
    render() { 
        console.log(this)
        return(
            <>
            <div> State in Class Based</div>
            <h1>Counter :  <mark> {this.state.count}</mark></h1>

            <button onClick={this.updateState}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            <button onClick={this.Reset}>Reset</button>


            </>
        )
    }
}
export default StateInCBC;