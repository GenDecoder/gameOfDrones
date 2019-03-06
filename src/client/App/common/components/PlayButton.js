import { css, StyleSheet } from 'aphrodite';
import Proptypes from 'prop-types';
import React from 'react';

function PlayButton({ onClick, text }) {
   return (
      <div className={css(Styles.container)} onClick={onClick} role="presentation">
         <span>{text}</span>
      </div>
   );
}

PlayButton.propTypes = {
   onClick: Proptypes.func.isRequired,
   text: Proptypes.string.isRequired
};

const Styles = StyleSheet.create({
   container: {
      color: 'white',
      cursor: 'pointer',
      backgroundColor: '#F3AF34',
      fontSize: '1em',
      padding: 10,
      textAlign: 'center',
      userSelect: 'none',
      width: 150
   }
});

export default PlayButton;
