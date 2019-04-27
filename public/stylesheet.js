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
  },
  icon: {
    resizeMode: 'contain',
    aspectRatio: 0.07,
    marginRight: 10,
    marginBottom: 5
  },
  inputLabel: {
    color: '#86939e',
    fontSize: 16,
    fontWeight: 'bold'
  },
  inputText: {
    minHeight: 40,
    color: 'black',
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    width: '100%',
    marginLeft: 100,
  },
  datePicker: {
    display: 'flex',
    paddingHorizontal: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#86939e',
    transform: [{ translateX: 0 }],
    height: 40,
  }
});
