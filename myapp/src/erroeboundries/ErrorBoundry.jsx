import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = {hasError:false}

    static getDerivedStateFromError(){
        return{hasError:true}
    }
  render() {
    if (this.state.hasError) {

        return <h1> Some things went wrong</h1>
        
    } return this.props.children
  }
}
