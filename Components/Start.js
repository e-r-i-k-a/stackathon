import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View } from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import { Actions, Router, Scene } from 'react-native-router-flux'
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { qns } from '../server/ip'

export default class Start extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: null,
      gameName: '',
      gameDate: '',
      minPlayer: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const { gameName, gameDate, minPlayer } = this.state;

    if (gameName && gameDate && minPlayer) {
      const date = moment(gameDate, 'MMMM Do YYYY, h:mm a').format('YYYY-MM-DD HH:mm:ss').toString();

      axios.post(qns + '/api/game', {
        name: gameName,
        date,
        minPlayer,
      })
        .then((createdGame) => {
          Alert.alert("Your game has been created!  Let's invite some peeps")
          Actions.EnterPlayers(createdGame)
        })
    } else {
      if (!gameName) {
        Alert.alert('Please name your game!')
      } else if (!gameDate) {
        Alert.alert('When is your game?')
      } else if (!minPlayer) {
        Alert.alert('How many players do you need?')
      }
    }
  }

  render() {
    const now = moment().format('MMMM Do YYYY, h:mm a');

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Create a Game!</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name:</Text>
          <TextInput
            style={styles.inputText}
            placeholder={this.state.gameName || 'Weekly Card Game'}
            placeholderTextColor="gray"
            onChangeText={(gameName) => this.setState({ gameName })} />
        </View>

        <View style={styles.inputContainer} >
          <Text style={styles.inputLabel}>Date:</Text>
          <DatePicker
            style={{ width: '80%' }}
            mode="datetime"
            date={this.state.gameDate}
            placeholder={this.state.gameDate || "Next Friday Night"}
            format='MMMM Do YYYY, h:mm a'
            minDate={now}
            confirmBtnText="Select"
            cancelBtnText="Back"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                marginRight: 0,
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: 'white',
              },
              placeholderText: {
                color: 'gray',
                fontSize: 15
              }
            }}
            onDateChange={(gameDate) => { this.setState({ gameDate }) }}
          />
        </View>

        <View style={styles.inputContainer} >
          <Text style={styles.inputLabel}>Minimum Players:</Text>
          <TextInput
            style={styles.inputText}
            placeholder='We need at least 4 players'
            placeholderTextColor="gray"
            keyboardType='numeric'
            returnKeyType='done'
            onChangeText={(minPlayer) => this.setState({ minPlayer })} />
        </View>

        <TouchableWithoutFeedback
          onPress={this.handleSubmit} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}
