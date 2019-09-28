import React from 'react';
import axios from 'axios';

class Player extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      player: [],
    }
  }

  componentDidMount(){
    const options = {
      headers: {
      'TRN-Api-Key': '213aa40c-5cee-4d04-85c5-5a341c72460a',
      'mode': 'no-cors',
      }
    }

    axios.get('https://public-api.tracker.gg/v2/apex/standard/profile/psn/whittlesey', options)
    .then(res => {
      console.log(res);
    })
  }

  render(){
    return (
      <div className="player">
          <p>This is a player</p>
      </div>
    );
  }
}

export default Player;