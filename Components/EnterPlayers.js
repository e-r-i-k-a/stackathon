import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, schoolIp} from '../server/ip'

export default class EnterPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      createdGame: {}
    }
  }

	componentDidMount () {
    axios.get(homeIp+'/api/game/'+this.props.data.id)
		.then(res => res.data)
		.then(createdGame => {
      this.setState({createdGame})
    })
    .catch((err)=>{console.error('error', err)})
  }

  render() {
    console.log('state',this.state)
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello from Enter Players Component!</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={()=>{Alert.alert('Congratulations, you pressed a button.')}}>
          <View style={styles.button}>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
