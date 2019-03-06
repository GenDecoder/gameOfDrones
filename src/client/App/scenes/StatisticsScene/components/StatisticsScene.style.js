import { StyleSheet } from 'aphrodite';

export const Styles = StyleSheet.create({
   container: {},
   actionBarContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: 10
   },
   listContainer: {
      padding: 10,
      backgroundColor: '#3A6F8F'
   },
   itemContainer: {
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center'
   },
   nameText: {
      flex: 1,
      color: '#6D6E71',
      fontWeight: 'bold',
      fontSize: '1.5em'
   },
   numInfoContainer: {
      width: 150,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
   },
   totalGamesValueText: {
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: '#3A6F8F'
   },
   totalGamesLabelText: {
      color: '#6D6E71',
      fontSize: '0.8em',
      fontWeight: 'bold',
      marginTop: 10
   },

   columnInfoContainer: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
   },
   rowInfoContainer: {
      width: '100%',
      flex: 1,
      display: 'flex',
      padding: 10,
      alignItems: 'center'
   },
   winsLabelText: {
      color: '#6D6E71',
      fontSize: '0.8em'
   },
   winsValueText: {
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: '1em',
      color: 'green'
   },
   defeatsLabelText: {
      color: '#6D6E71',
      fontSize: '0.8em'
   },
   defeatsValueText: {
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: '1em',
      color: 'red'
   }
});
