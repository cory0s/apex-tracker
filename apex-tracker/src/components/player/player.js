import React from 'react';
import axios from 'axios';


class Player extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      characters: {},
    }
  }

  componentDidMount(){
    const options = {
      Headers: {
        'TRN-Api-Key': '213aa40c-5cee-4d04-85c5-5a341c72460a',
      },
      mode: 'no-cors',
    }

    console.log('COMPONENT DID MOUNT');
    axios.get('https://public-api.tracker.gg/v2/apex/standard/profile/psn/whittlesey', options)
    .then(res => {
      console.log('response', res);
      // const characters = res.data;
      // this.setState({characters})
    })
    .catch(err => console.error(err));
  }

  render(){
    return (
      <div className="player">
          <h1>Characters</h1>
          <ul>
            {/* { this.state.characters.map(char => <li>{char.name}</li>) } */}
          </ul>
      </div>
    );
  }
}

export default Player;