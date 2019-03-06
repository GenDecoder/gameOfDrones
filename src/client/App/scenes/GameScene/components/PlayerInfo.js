import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import Proptypes from 'prop-types';

function PlayerInfo({ isItTurn, isOver, name, rounds, winsCount }) {
   const isAWin = rounds === winsCount;
   return (
      <div className={css(Styles.container)}>
         <div>
            <span className={css(Styles.nameText)}>{name}</span>
            {isItTurn && !isOver && <span className={`icon-circle ${css(Styles.activeIcon)}`} />}
         </div>
         {isOver && (
            <span
               className={`${isAWin ? 'icon-check' : 'icon-times'} ${css(
                  isAWin ? Styles.winIcon : Styles.loseIcon
               )}`}
            />
         )}
         <span className={css(Styles.winsCounterText)}>{`${winsCount} / ${rounds}`}</span>
      </div>
   );
}

PlayerInfo.propTypes = {
   isItTurn: Proptypes.bool.isRequired,
   isOver: Proptypes.bool,
   name: Proptypes.string.isRequired,
   rounds: Proptypes.number.isRequired,
   winsCount: Proptypes.number.isRequired
};
PlayerInfo.defaultProps = {
   isOver: false
};

const Styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '20%'
   },
   nameContainer: {},
   nameText: {
      color: '#6D6E71',
      fontSize: '1.5em',
      fontWeight: 'bold'
   },
   activeIcon: {
      color: '#67D410',
      marginLeft: 10,
      marginTop: 5
   },
   winIcon: {
      color: 'green',
      fontSize: '1em'
   },
   loseIcon: {
      color: 'red',
      fontSize: '1em'
   },
   winsCounterText: {
      borderStyle: 'solid',
      borderWidth: 1,
      color: '#3A6F8F',
      fontSize: '1.5em',
      fontWeight: 'bold',
      padding: '3px 10px'
   }
});

export default PlayerInfo;
