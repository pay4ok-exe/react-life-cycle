import React, { useState } from 'react'
import img from './assets/image.png'

class App extends React.Component {

    componentWillUnmount(){
        this.props.song.pause()
    }
  render() {
    return (
      <div>
        <img src={img} />
      </div>
    );
  }
}

export default App
