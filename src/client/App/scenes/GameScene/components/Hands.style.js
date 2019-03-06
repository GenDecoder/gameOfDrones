import { StyleSheet } from 'aphrodite';

const handContainer = {
   alignItems: 'center',
   backgroundColor: '#3A6F8F',
   borderColor: 'white',
   borderWidth: 1,
   borderStyle: 'solid',
   cursor: 'pointer',
   display: 'flex',
   justifyContent: 'center',
   height: 120,
   ':hover': {
      opacity: 0.9
   }
};
const handText = {
   color: 'white',
   fontSize: '4em',
   fontWeight: 500
};

export const Styles = StyleSheet.create({
   container: {
      display: 'flex',
      flex: 1
   },
   handWrapContainer: {
      flex: 1,
      position: 'relative'
   },
   handContainer,
   handContainerSelected: {
      ...handContainer,
      backgroundColor: '#F3AF34'
   },
   handText,
   handTextSelected: {
      ...handText
   },
   handLockedContainer: {
      ...handContainer,
      backgroundColor: '#666666',
      cursor: 'default',
      ':hover': 'none'
   },
   maskContainer: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#3b3f4182',
      position: 'absolute'
   }
});
