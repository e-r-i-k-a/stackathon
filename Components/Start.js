import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View } from 'react-native';
import { Input } from 'react-native-elements';
import styles from '../public/stylesheet.js';
import axios from 'axios';
import { Actions, Router, Scene } from 'react-native-router-flux';
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
          leftIcon={
            <Image
            source={require('../public/dice-solid.png')}
            resizeMode='contain'
            aspectRatio={0.07}
            style={{marginRight: 10, marginBottom: 5}}
            />
          }
          returnKeyType='done'
          onChangeText={(gameName) => this.setState({ gameName })}
          containerStyle={{}}
          labelStyle={{}}
          inputContainerStyle={{}}
        />

        <View style={{width: '100%', paddingHorizontal: 10, display: 'flex'}} >
          <Text
            style={{
              color: '#86939e',
              fontSize: 16,
              fontWeight: 'bold'
              }}>
              Date</Text>
          <DatePicker
            mode="datetime"
            date={this.state.gameDate}
            placeholder={this.state.gameDate || "Next Friday Night"}
            format='MMMM Do YYYY, h:mm a'
            minDate={now}
            confirmBtnText="Select"
            cancelBtnText="Back"
            iconSource={require('../public/calendar-alt-regular.png')}
            style={{
              display: 'flex',
              paddingHorizontal: 10,
              width: '100%',
              borderBottomWidth: 1,
              borderColor: '#86939e',
              transform: [{translateX: 0}],
              height: 40,
            }}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                marginRight: 10,
                marginBottom: 5,
                overflow: 'hidden',
                resizeMode:'contain',
                aspectRatio: 0.07
              },
              dateInput:{
                width: '100%',
                borderWidth: 0
              },
              placeholderText: {
                minHeight: 40,
                color: 'black',
                alignSelf: 'center',
                flex: 1,
                fontSize: 18,
                width: '100%',
                marginLeft: 100,
              },
              dateText: {
                minHeight: 40,
                color: 'black',
                alignSelf: 'center',
                flex: 1,
                fontSize: 18,
                width: '100%',
                marginLeft: 100,
              }
            }}
            onDateChange={(gameDate) => { this.setState({ gameDate }) }}
          />
        </View>

        <Input
          label='Minimum Players'
          placeholder={this.state.minPlayer || 'We need at least 4 players'}
          leftIcon={
            <Image
            source={require('../public/users-solid.png')}
            resizeMode='contain'
            aspectRatio={0.07}
            style={{marginRight: 12, marginBottom: 5}}
            />
          }
          returnKeyType='done'
          keyboardType='numeric'
          onChangeText={(minPlayer) => this.setState({ minPlayer })}
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
