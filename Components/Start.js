import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, schoolIp} from '../server/ip'
import Calendar from './Calendar'

export default class Start extends Component {

  constructor(props) {
    super(props)
    this.state = {
      games: [],
      gameName: '',
      // gameType: '',
      gameDate: '',
      // minPlayer: 1,
      // maxPlayer: null,
      confirmationDate: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    axios.post(homeIp+'/api/game', {
      name: this.state.gameName
    })
    .then(() => {
      Alert.alert('Your game has been created!')
    })
    .then(() => {
      Actions.EnterPlayers()
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Hello from Start Component!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name: </Text>
          <TextInput
            style={styles.inputText}
            placeholder='Enter a team or event name'
            placeholderTextColor = "gray"
            onChangeText={(gameName)=> this.setState({gameName})} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Date: </Text>
          <View><Calendar now={new Date()}/></View>
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
