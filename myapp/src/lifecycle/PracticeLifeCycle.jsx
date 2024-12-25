import React, {Component} from 'react';

export default  class PracticeLifeCycle extends Component{
    // state={value:0}
    constructor(){
        super();
        this.state={value:0}
    }
    componentDidMount(){
        console.log("this is componentDidMount")
        //  this.s1=setInterval(()=>{
        //     console.log(" this is interval")
        // },2000)
    }
    componentDidUpdate(){
        console.log("this is ComponentDidUpdate")
    }
    componentWillUnmount(){
        console.log("this is componentwillUnMount")
        // clearInterval(this.s1)
    }
    getSnapshotBeforeUpdate(){
        console.log("before update stae was :", this.state.value)
        return null
    }
    render(){
        return(
            <>
                <h1> This  is  Practice Life Cycle Method : Count==:{this.state.value} </h1>
                <button onClick={()=>this.setState({value:this.state.value+1})}>Click me</button>
            </>
        )
    }
}

