import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, home2Ip, schoolIp} from '../server/ip'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      games: [],
    }
  }

	componentDidMount () {
    axios.get(home2Ip + '/api/game')
		.then(res => res.data)
		.then(games => {
      this.setState({games})
    })
    .catch((err)=>{console.error('error', err)})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello!</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={()=> Actions.Start()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click to Start</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
