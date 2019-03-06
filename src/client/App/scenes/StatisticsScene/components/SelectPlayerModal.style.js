import { StyleSheet } from 'aphrodite';

export const Styles = StyleSheet.create({
   backdropContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
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
      padding: 10,
      maxHeight: 400,
      overflowY: 'auto',
      backgroundColor: '#cdd8df'
   },
   modalFooterContainer: {
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
   },

   itemContainer: {
      padding: 5,
      margin: 10,
      borderStyle: 'solid',
      backgroundColor: 'white',
      color: '#6D6E71'
   },
   itemContainerSelected: {
      color: 'white',
      backgroundColor: '#F3AF34'
   },
   nameText: {
      fontSize: '0.8em',
      fontWeight: 'bold',
      marginRight: 10
   }
});
