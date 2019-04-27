import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import styles from '../public/stylesheet.js';

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Hello!</Text>

        <Button
          title='Click to Start'
          onPress={()=> Actions.Start()}
          buttonStyle= {{...styles.button}}
          titleStyle={{...styles.buttonText}}
        />

      </View>
    );
  }
};
