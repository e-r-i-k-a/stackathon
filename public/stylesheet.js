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
    margin: 20
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold'
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
  button: {
    backgroundColor: '#A32C41',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 23,
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
