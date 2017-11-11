import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, schoolIp} from '../server/ip'

export default class Start extends Component {

  constructor(props) {
    super(props)
    this.state = {
      games: [],
      gameName: '',
      // gameType: '',
      // gameDate: '',
      // minPlayer: 1,
      // maxPlayer: null,
      // confirmationDate: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

	// componentDidMount () {
  //   axios.get(homeIp+'/api/game')
	// 	.then(res => res.data)
	// 	.then(games => {
  //     this.setState({games})
  //   })
  //   .catch((err)=>{console.error('error', err)})
  // }

  handleSubmit(event){
    axios.post(homeIp+'/api/game', {
      // gameName, gameType, gameDate, minPlayer, maxPlayer, confirmationDate
      name: this.state.gameName
    })
    .then(() => {
      Alert.alert('Game has been created!')
      Actions.EnterPlayers()
    })
    .then(()=>{})
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello from Start Component!</Text>
        </View>

        <View>
        <TextInput
          style={styles.input}
          placeholder='Enter a team or event name'
          placeholderTextColor = "gray"
          onChangeText={(gameName)=> this.setState({gameName})} />
        </View>

        <TouchableWithoutFeedback
          onPress={this.handleSubmit} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={()=> Actions.Test()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click to Continue</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}
