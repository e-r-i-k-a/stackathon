import React, { Component } from 'react';
import { Text, Image, Alert, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import styles from '../public/stylesheet.js';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { qns } from '../server/ip';

export default class EnterPlayers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playerEmail: ''
    },
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
    this.handleViewTeam = this.handleViewTeam.bind(this)
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

          <Input
            label='Player Email'
            placeholder='Enter an email address'
            returnKeyType='done'
            autoCorrect={false}
            keyboardType='email-address'
            value={this.state.playerEmail}
            onChangeText={(playerEmail) => this.setState({playerEmail})}
            leftIcon={
              <Image
              source={require('../public/images/envelope-solid.png')}
              style={styles.icon}
              />
            }
          />

          <Button
            title='Add Player'
            onPress={this.handleAddPlayer}
            buttonStyle={{...styles.button}}
            titleStyle={{...styles.buttonText}}
          />

          <Button
            title='Checkout my Team'
            onPress={this.handleViewTeam}
            buttonStyle={{...styles.button}}
            titleStyle={{...styles.buttonText}}
          />

      </View>
    );
  }
}
