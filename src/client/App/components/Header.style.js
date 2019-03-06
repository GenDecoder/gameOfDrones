import { StyleSheet } from 'aphrodite';

export const Styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: '#3A6F8F',
      color: 'white',
      display: 'flex',
      fontFamily: 'Open Sans',
      padding: 10,
      position: 'relative'
   },
   brandContainer: {
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 2,
      boxSizing: 'border-box',
      cursor: 'pointer',
      padding: 8,
      textAlign: 'center',
      userSelect: 'none'
   },
   brandText: {
      fontWeight: 'bold',
      fontSize: '1em',
      letterSpacing: 1,
      textTransform: 'uppercase'
   },
   titleContainer: {
      flex: 1
   },
   titleText: {
      backgroundColor: 'white',
      color: '#3A6F8F',
      letterSpacing: 2,
      fontWeight: 'bold',
      fontSize: '1em',
      padding: 10,
      textTransform: 'uppercase'
   }
});
