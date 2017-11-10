import React, {Component} from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, SectionList, View} from 'react-native';
import styles from './public/stylesheet.js'
import axios from 'axios'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      games: [],
    }
  }

	componentDidMount () {
    axios.get('http://172.16.27.39:1337/api/game')
    //network>wireless>ipV4address
		.then(res => res.data)
		.then(games => {
      this.setState({games})
    })
    .catch((err)=>{console.error('error', err)})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TouchableWithoutFeedback
          onPress={()=>{Alert.alert('Congratulations, you pressed a button.')}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click to Start</Text>
            {/* {this.state.games.map(game => {
              return <View key={game.id}>
                <Text>{game.name}</Text>
              </View>})
            } */}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
