import React, { Component } from 'react';
import { Text, Image, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Input } from 'react-native-elements';
import styles from '../public/stylesheet.js';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { qns } from '../server/ip';

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

    if (gameName && gameDate && !!minPlayer) {
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

        <Input
          label='Name'
          placeholder={this.state.gameName || 'Weekly Card Game'}
          returnKeyType='done'
          onChangeText={(gameName) => this.setState({ gameName })}
          leftIcon={
            <Image
            source={require('../public/dice-solid.png')}
            style={styles.icon}
            />
          }
        />

        <View style={{width: '100%', paddingHorizontal: 10, display: 'flex'}} >
          <Text style={styles.inputLabel}>Date</Text>
          <DatePicker
            mode="datetime"
            date={this.state.gameDate}
            placeholder={this.state.gameDate || "Next Friday Night"}
            format='MMMM Do YYYY, h:mm a'
            minDate={now}
            confirmBtnText="Select"
            cancelBtnText="Back"
            iconSource={require('../public/calendar-alt-regular.png')}
            onDateChange={(gameDate) => { this.setState({ gameDate }) }}
            style={styles.datePicker}
            customStyles={{
              dateIcon: {
                ...styles.icon,
                position: 'absolute',
                left: 0,
              },
              dateInput:{
                width: '100%',
                borderWidth: 0
              },
              placeholderText: {
                ...styles.inputText
              },
              dateText: {
                ...styles.inputText
              }
            }}
          />
        </View>

        <Input
          label='Minimum Players'
          placeholder={this.state.minPlayer || 'We need at least 4 players'}
          returnKeyType='done'
          keyboardType='numeric'
          onChangeText={(minPlayer) => this.setState({ minPlayer })}
          leftIcon={
            <Image
            source={require('../public/users-solid.png')}
            style={styles.icon}
            />
          }
        />

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
