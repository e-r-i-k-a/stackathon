import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View } from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { qns } from '../server/ip'
// import Team from './Team'

export default class EnterPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playerEmail: ''
    },
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
    this.handleViewTeam = this.handleViewTeam.bind(this)
  }

  handleInputChange(playerEmail) {
    this.setState({ playerEmail })
  }

  handleAddPlayer() {
    axios.post(qns + '/api/player/game/' + this.props.data.id, {
      email: this.state.playerEmail
    })
      .then(() => {
        this.setState({
          playerEmail: ''
        })
      })
      .then(() => Alert.alert('Player has been added!'))
      .catch((err) => { console.error('error', err) })
  }

  handleViewTeam() {
    Actions.Team(this.props.data.id)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Build a Team!</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Player Email: </Text>
          <TextInput
            style={styles.inputText}
            onChangeText={(playerEmail) => this.handleInputChange(playerEmail)}
            returnKeyType='done'
            autoCorrect={false}
            keyboardType='email-address'
            value={this.state.playerEmail}
            placeholder='Enter an email address'
            placeholderTextColor='gray'
          />
        </View>

          <TouchableWithoutFeedback
            onPress={this.handleAddPlayer} >
            <View style={styles.buttonSmall}>
              <Text style={styles.buttonText}>Add Player</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={this.handleViewTeam}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Checkout my Team</Text>
            </View>
          </TouchableWithoutFeedback>

      </View>
    );
  }
}
