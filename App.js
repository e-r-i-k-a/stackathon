import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from './public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import Home from './Components/Home'
// import Test from './Components/Test'
import Start from './Components/Start'
import EnterPlayers from './Components/EnterPlayers'
import Team from './Components/Team'
import EmailSent from './Components/EmailSent'
// import {homeIp, schoolIp} from './server/ip.js'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Scene key= 'Root'>
          <Scene key= 'Home' component={Home}/>
          {/* <Scene key= 'Test' component={Test}/> */}
          <Scene key= 'Start' component={Start}/>
          <Scene key= 'EnterPlayers' component={EnterPlayers}/>
          <Scene key= 'Team' component={Team}/>
          <Scene key= 'EmailSent' component={EmailSent}/>
        </Scene>
      </Router>
    );
  }
}
