import React, { useState } from 'react'
import Kairosh from './Kairosh'

class App extends React.Component {

  // constructor(){
  //   super()
  //   console.log('1')
  //   this.state = {
  //     count: 0
  //   }
  // }

  // handleButton = ()=>{
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }

  // componentDidUpdate(){
  //   console.log('5')
  // }

  // componentDidMount(){
  //   console.log('4')
  // }

  state = {
    // count: 0,
    // isLoading: false,
    isVisible: false
  }

  componentDidMount(){
    setInterval(()=>{
// wait
      this.setState({
        isVisible: !this.state.isVisible
      })
    }, 3000)
  }

  // componentDidMount(){
  //   this.setState({
  //     isLoading: true
  //   })

  //   setTimeout(()=>{
  //       this.setState({count: 5, isLoading: false})
  //   }, 5000);
  // }


  render() {
    return (
      <>
        {/* <h1>Task 1</h1>
        {this.state.isLoading ? <>...Lodaing</> : <>{this.state.count}</>} */}

        <h1>Task 2</h1>
        {this.state.isVisible && <Kairosh/>}
        {/* <Kairosh/> */}
      </>
    );
  }
}

export default App
