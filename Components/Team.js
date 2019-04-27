import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { Button } from 'react-native-elements';
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
    const {name, minPlayer, date} = this.state.createdGame;
    const time = date.substr(date.indexOf('T') + 1).slice(0, 5);
    const gameDate = `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;

    const mailTo = `mailto:${email}`;
    const mailSubject = `?subject=Meet me for ${name}!`;
    const confirmLink = `<a href = ${qns}/api/player/${id}min?min=${minPlayer}>Click</a>`;
    const mailBody = `&body=Join me on ${gameDate} at ${time} for ${name}!  I need at least ${minPlayer} people.  Are you down? ${confirmLink} if yes :-)`;

    Linking.openURL(mailTo + mailSubject + mailBody);
  }

  render() {
    const {players} = this.state.createdGame;

    if (players && players.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.h2}>My Team</Text>
          <View style={styles.playerListContainer}>

            {
              players.map(player => {
                return <View key={player.id}>
                  <Text style={styles.playerListText}>{player.email}</Text>
                  <Button
                    title='Invite'
                    onPress={() => this.sendEmail(player.id, player.email)}
                    buttonStyle={{...styles.button}}
                    titleStyle={{...styles.buttonText}}
                  />
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
