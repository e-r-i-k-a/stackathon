import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View, Linking } from 'react-native';
import styles from '../public/stylesheet.js'
import axios from 'axios'
import { qns } from '../server/ip'

export default class Team extends Component {

  constructor(props) {
    super(props)
    this.state = {
      createdGame: {}
    }
    this.sendEmail = this.sendEmail.bind(this)
  }

  componentDidMount() {
    axios.get(qns + '/api/game/' + this.props.data)
      .then(res => res.data)
      .then(createdGame => {
        this.setState({ createdGame })
      })
      .catch((err) => { console.error('error', err) })
  }

  sendEmail(id, email) {
    const gameName = this.state.createdGame.name
    const minPlayer = this.state.createdGame.minPlayer
    const date = this.state.createdGame.date
    const gameTime = date.substr(date.indexOf('T') + 1).slice(0, 5)
    const gameDate = `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`

    const mailTo = `mailto:${email}`
    const mailSubject = `?subject=Meet me for ${gameName}!`
    const confirmLink = `<a href = ${qns}/api/player/${id}min?min=${minPlayer}>Click</a>`
    const mailBody = `&body=Join me on ${gameDate} at ${gameTime} for ${gameName}!  I need at least ${minPlayer} people.  Are you down? ${confirmLink} if yes :-)`

    Linking.openURL(mailTo + mailSubject + mailBody)
  }

  render() {
    if (this.state.createdGame.players && this.state.createdGame.players.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.h2}>My Team</Text>
          <View style={styles.playerListContainer}>
            {
              this.state.createdGame.players.map(player => {
                return <View key={player.id}>
                  <Text style={styles.playerListText}>{player.email}
                  </Text>
                  <TouchableWithoutFeedback
                    onPress={() => this.sendEmail(player.id, player.email)}>
                    <View style={styles.inviteButton}>
                      <Text style={styles.inviteButtonText}>Invite!</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => this.sendEmail(player.id, player.email)}>
                    <View style={styles.inviteButton}>
                      <Text style={styles.inviteButtonText}>Invite2!</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              })
            }
          </View>
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
