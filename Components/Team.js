import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View, Linking} from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import {Actions, Router, Scene} from 'react-native-router-flux'
import {homeIp, schoolIp} from '../server/ip'

export default class Team extends Component {

  constructor(props) {
    super(props)
    this.state = {
      createdGame: {}
    }
    this.sendEmail = this.sendEmail.bind(this)
  }

	componentDidMount () {
    axios.get(homeIp+'/api/game/'+this.props.data)
		.then(res => res.data)
		.then(createdGame => {
      return this.setState({createdGame})
    })
    .catch((err)=>{console.error('error', err)})
  }

  sendEmail () {
    let gameName = this.state.createdGame.name
    let date = this.state.createdGame.date
    let gameTime = date.substr(date.indexOf('T')+1).slice(0,5)
    let gameDate = `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}`
    let minPlayer = this.state.createdGame.minPlayer

    let playerArr = this.state.createdGame.players;
    let emailStr = playerArr.map((player) => player.email).reduce((sum, current) => `${sum},${current}`)

    let mailTo = `mailto:${emailStr}`
    let subject = `?subject=Meet me for ${gameName}!`
    let body = `&body=Join me on ${gameDate} at ${gameTime} for ${gameName}!  I need at least ${minPlayer} people.  Are you down?  Click if yes :-)`

    Linking.openURL(mailTo + subject + body)
    Actions.EmailSent()
  }

  render() {
    if (this.state.createdGame.players && this.state.createdGame.players.length) {
      return (
        <View style={styles.container}>

          <View>
            <Text style={styles.h2}>My Team</Text>
          </View>

          <TouchableWithoutFeedback>
            <View style={styles.playerList}>
              {
                this.state.createdGame.players.map(player => {
                  return <View key={player.id}>
                  <Text style={styles.buttonTextSmall}>{player.email}</Text>
                  </View>
                })
              }
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
          onPress={this.sendEmail}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Send Invites!</Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.h2}>Add some Players!</Text>
        </View>
      )
    }
  }
}
