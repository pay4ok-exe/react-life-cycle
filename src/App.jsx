import React, { useState } from 'react'

class App extends React.Component {

  constructor(){
    super()
    console.log('1')
    this.state = {
      count: 0
    }
  }

  handleButton = ()=>{
    this.setState({
      count: this.state.count+1
    })
  }

  componentDidUpdate(){
    console.log('5')
  }

  componentDidMount(){
    console.log('4')
  }


  render() {
    console.log('2')

    return (
      <div>   
        <h1>Hello world</h1>
    {console.log('3')}

        <p>Count: {this.state.count}</p>
        <button onClick={this.handleButton}>Increase Count</button>
        {/* <button onClick={this.handleButton}>Descrease Count</button> */}
      </div>
    );
  }
}

export default App
