import React, { useState } from 'react'
import Kairosh from './Kairosh'
import newSong from './assets/myUniverse.mp3'
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
    count: 0,
    isLoading: false,
    isVisible: false,
    song: new Audio(newSong)
  }

  start = () =>{
    setInterval(()=>{
      // wait
            this.setState({
              isVisible: !this.state.isVisible
            })
          }, 3000)

  } 

  componentDidMount(){
    this.setState({
      isLoading: true
    })

    
    
  }

  componentDidUpdate(){
    this.state.isVisible && this.state.song.play()

  }


  render() {
    return (
      <div>
        <h1>Task 1</h1>
        {this.state.isLoading ? <>...Lodaing</> : <>{this.state.count}</>}

        <h1>Task 2</h1>
        <button onClick={this.start}> Start</button>
        {this.state.isVisible && <Kairosh song={this.state.song}/>}
        {/* <Kairosh/> */}

        <h1>Task 3</h1>
        {/* {} */}
        </div>
    );
  }
}

export default App
