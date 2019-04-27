import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    //fill all available space, shared evenly amongst each other component with the same parent.
    //The larger the flex, the higher the ratio of space a component will take compared to its siblings.
    backgroundColor: '#FFBAC6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 0
  },
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#A32C41',
    borderRadius: 50,
    margin: 20
  },
  buttonMedium: {
    width: 250,
    alignItems: 'center',
    backgroundColor: '#A32C41',
    borderRadius: 50
  },
  buttonSmall: {
    width: 180,
    alignItems: 'center',
    backgroundColor: '#A32C41',
    borderRadius: 50,
    margin: 10
  },
  buttonText: {
    padding: 8,
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  },
  buttonTextSmall: {
    padding: 8,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 5
  },
  inputLabel: {
    justifyContent: 'flex-start',
    width: '80%',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 15,
    width: '80%',
    margin: 5,
    textAlign: 'center'
  },
  playerListText: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  playerListContainer: {
    margin: 18,
    width: 280,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#DD9FED',
    display: 'flex',
    flexDirection: 'column',
  },
  inviteButton: {
    width: 80,
    alignItems: 'center',
    backgroundColor: '#A32C41',
    borderRadius: 50,
    margin: 5,
    display: 'flex',
  },
  inviteButtonText: {
    padding: 6,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }
});
