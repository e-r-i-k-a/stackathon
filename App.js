import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux'
import Home from './Components/Home'
import Start from './Components/Start'
import EnterPlayers from './Components/EnterPlayers'
import Team from './Components/Team'
import EmailSent from './Components/EmailSent'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key= 'Root'>
          <Scene key= 'Home' component={Home}/>
          <Scene key= 'Start' component={Start}/>
          <Scene key= 'EnterPlayers' component={EnterPlayers}/>
          <Scene key= 'Team' component={Team}/>
          <Scene key= 'EmailSent' component={EmailSent}/>
        </Scene>
      </Router>
    );
  }
}
