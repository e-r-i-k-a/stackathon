import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from './public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import Home from './Components/Home'
import Test from './Components/Test'
          {/* onPress={()=>{Alert.alert('Congratulations, you pressed a button.')}}> */}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      games: [],
    }
  }

	componentDidMount () {
    axios.get('http://172.16.27.39:1337/api/game')
    //network>wireless>ipV4address
		.then(res => res.data)
		.then(games => {
      this.setState({games})
    })
    .catch((err)=>{console.error('error', err)})
  }

  render() {
    return (
      <Router>
        <Scene key= 'Root'>
          <Scene key= 'Home' component={Home}/>
          <Scene key='Test' component={Test}/>
        </Scene>
      </Router>
    );
  }
}
