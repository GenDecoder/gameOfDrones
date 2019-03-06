import { css } from 'aphrodite';
import React from 'react';
import Proptypes from 'prop-types';
import { Styles } from './Hands.style';

const HANDS = {
   ROCK: 'ROCK',
   PAPER: 'PAPER',
   SCISSORS: 'SCISSORS'
};
const ICONS = {
   ROCK: 'icon-hand-rock-o',
   PAPER: 'icon-hand-paper-o',
   SCISSORS: 'icon-hand-scissors-o'
};
const OPTIONS = [HANDS.ROCK, HANDS.PAPER, HANDS.SCISSORS];

function Hands({ isLocked, onSelect, value, isOver }) {
   return (
      <div className={css(Styles.container)}>
         {OPTIONS.map(option => {
            const isSelected = value === HANDS[option];
            return (
               <div className={css(Styles.handWrapContainer)} key={option}>
                  {isOver && <div className={css(Styles.maskContainer)} />}
                  {isLocked && !isOver ? (
                     <div className={css(Styles.handLockedContainer)} key={option}>
                        <span className={css(Styles.handText)}>?</span>
                     </div>
                  ) : (
                     <div
                        className={css(
                           !isSelected ? Styles.handContainer : Styles.handContainerSelected
                        )}
                        onClick={() => !isOver && onSelect(option)}
                        role="presentation"
                     >
                        <span
                           className={`${ICONS[option]} ${css(
                              !isSelected ? Styles.handText : Styles.handTextSelected
                           )}`}
                        />
                     </div>
                  )}
               </div>
            );
         })}
      </div>
   );
}

Hands.propTypes = {
   isLocked: Proptypes.bool,
   onSelect: Proptypes.func.isRequired,
   value: Proptypes.oneOf([HANDS.ROCK, HANDS.SCISSORS, HANDS.PAPER]),
   isOver: Proptypes.bool
};
Hands.defaultProps = {
   isLocked: false,
   value: null,
   isOver: false
};

export default Hands;
