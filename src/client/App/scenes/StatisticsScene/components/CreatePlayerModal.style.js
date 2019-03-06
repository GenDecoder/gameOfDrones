import { StyleSheet } from 'aphrodite';

export const Styles = StyleSheet.create({
   backdropContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#00000073'
   },
   modalContainer: {
      width: 300,
      backgroundColor: 'white',
      borderColor: '#3A6F8F',
      borderStyle: 'solid',
      borderWidth: 1
   },
   modalHeaderContainer: {
      backgroundColor: '#3A6F8F',
      padding: 10
   },
   modalHeaderTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1em'
   },
   modalBodyContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10
   },
   modalFooterContainer: {
      padding: 10,
      paddingTop: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
   },

   labelText: {
      color: '#6D6E71',
      fontSize: '0.8em',
      fontWeight: 'bold',
      marginRight: 10
   },
   inputField: {
      borderStyle: 'solid',
      borderColor: '#3A6F8F',
      borderWidth: 1,
      outline: 'none',
      padding: '3px 5px',
      flex: 1
   }
});
