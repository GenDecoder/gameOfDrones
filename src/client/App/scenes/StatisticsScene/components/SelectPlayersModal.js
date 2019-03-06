import { css } from 'aphrodite';
import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '../../../common/components/Button';
import { setPlayerOne, setPlayerTwo, clearPlayers } from '../../../../store/reducers/game/actions';
import { Styles } from './SelectPlayerModal.style';
import * as routes from '../../../common/appRoutes';

function SelectPlayersModal({
   close,
   list,
   history,
   playerOne,
   playerTwo,
   loadPlayerOne,
   loadPlayerTwo,
   resetPlayers
}) {
   function isSelected(id) {
      return (
         (playerOne && playerOne.id && playerOne.id === id) ||
         (playerTwo && playerTwo.id && playerTwo.id === id)
      );
   }
   function selectPlayer(player) {
      if (!playerOne.id) {
         loadPlayerOne(player);
      } else {
         loadPlayerTwo(player);
      }
   }

   function proceed() {
      close();
      history.push(routes.GAME);
   }
   return (
      <div className={css(Styles.backdropContainer)}>
         <div className={css(Styles.modalContainer)}>
            <div className={css(Styles.modalHeaderContainer)}>
               <span className={css(Styles.modalHeaderTitle)}>Select Players</span>
            </div>
            <div className={css(Styles.modalBodyContainer)}>
               {list.map(player => (
                  <div
                     className={`${css(Styles.itemContainer)} ${isSelected(player.id) &&
                        css(Styles.itemContainerSelected)}`}
                     role="presentation"
                     key={player.id}
                     onClick={() => !isSelected(player.id) && selectPlayer(player)}
                  >
                     <span className={css(Styles.nameText)}>{player.name}</span>
                  </div>
               ))}
            </div>
            <div className={css(Styles.modalFooterContainer)}>
               <Button
                  type="normal"
                  onClick={() => {
                     resetPlayers();
                     close();
                  }}
               >
                  {'Cancel'}
               </Button>
               <Button
                  disabled={playerOne.id === undefined || playerTwo.id === undefined}
                  type="fill"
                  onClick={proceed}
                  style={{ marginLeft: 10 }}
               >
                  {'Proceed'}
               </Button>
            </div>
         </div>
      </div>
   );
}

SelectPlayersModal.propTypes = {
   close: Proptypes.func.isRequired,
   list: Proptypes.array.isRequired,
   history: Proptypes.shape({
      push: Proptypes.func.isRequired
   }).isRequired,
   playerOne: Proptypes.object.isRequired,
   playerTwo: Proptypes.object.isRequired,

   loadPlayerOne: Proptypes.func.isRequired,
   loadPlayerTwo: Proptypes.func.isRequired,
   resetPlayers: Proptypes.func.isRequired
};

const mapStateToProps = state => ({
   list: state.statistics.list,
   playerOne: state.game.playerOne,
   playerTwo: state.game.playerTwo
});
const mapDispacthToProps = dispatch => ({
   loadPlayerOne: player => dispatch(setPlayerOne(player)),
   loadPlayerTwo: player => dispatch(setPlayerTwo(player)),
   resetPlayers: () => dispatch(clearPlayers())
});

export default withRouter(
   connect(
      mapStateToProps,
      mapDispacthToProps
   )(SelectPlayersModal)
);
