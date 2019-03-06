import { css, StyleSheet } from 'aphrodite';
import Proptypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setIsOver } from '../../../../store/reducers/game/actions';
import Hands from './Hands';
import PlayerInfo from './PlayerInfo';
import * as routes from '../../../common/appRoutes';
import { updatePlayer } from '../../../../api/player';

const ROUNDS = 3;

function GameScene({ isOver, updateIsOver, playerOne, playerTwo, history }) {
   const [rules, setRules] = useState([]);
   const [p1, setP1] = useState(null); // Player #1 selected hand
   const [p2, setP2] = useState(null); // Player #2 selected hand
   const [p1Wins, setP1Wins] = useState(0);
   const [p2Wins, setP2Wins] = useState(0);
   const [turn, setTurn] = useState('p1');
   const [roundCounter, setRoundCounter] = useState(0);

   useEffect(() => {
      if (playerOne.id && playerTwo.id) {
         fetch('/api/settings/global/all')
            .then(res => res.json())
            .then(data => setRules(data.rules));
      } else {
         history.push(routes.STATISTICS);
      }
   }, []);
   useEffect(() => {
      if (!isOver) {
         resetGame();
      } else {
         updatePlayer(playerOne.id, { win: p1Wins > p2Wins });
         updatePlayer(playerTwo.id, { win: p2Wins > p1Wins });
      }
   }, [isOver]);
   function resetRound() {
      setP1(null);
      setP2(null);
      setTurn('p1');
   }
   function resetGame() {
      updateIsOver(false);
      setP1Wins(0);
      setP2Wins(0);
      setRoundCounter(0);
   }
   function onP1Played(newP1) {
      setP1(newP1);
      setTurn('p2');
   }
   // Once Player #2 has made its move we must apply the
   // logic to determine who have won the round.
   function onP2Played(newP2) {
      setP2(newP2);
      setTurn('');
      if (p1 !== newP2) {
         rules.forEach(rule => {
            if (rule.move === p1 && rule.kills === newP2) {
               setP1Wins(p1Wins + 1);
               updateIsOver(p1Wins + 1 === ROUNDS);
            }
            if (rule.move === newP2 && rule.kills === p1) {
               setP2Wins(p2Wins + 1);
               updateIsOver(p2Wins + 1 === ROUNDS);
            }
         });
         setRoundCounter(roundCounter + 1);
      }
      setTimeout(() => {
         resetRound();
      }, 1000);
   }
   return (
      <div className={css(Styles.container)}>
         <div className={css(Styles.playerContainer)}>
            <PlayerInfo
               isItTurn={turn === 'p1'}
               isOver={isOver}
               name={playerOne.id ? playerOne.name : ''}
               rounds={ROUNDS}
               winsCount={p1Wins}
            />
            <Hands value={p1} onSelect={onP1Played} isLocked={turn === 'p2'} isOver={isOver} />
         </div>

         <div className={css(Styles.playerContainer)}>
            <PlayerInfo
               isItTurn={turn === 'p2'}
               isOver={isOver}
               name={playerTwo.id ? playerTwo.name : ''}
               rounds={ROUNDS}
               winsCount={p2Wins}
            />
            <Hands value={p2} onSelect={onP2Played} isLocked={turn === 'p1'} isOver={isOver} />
         </div>
      </div>
   );
}

GameScene.propTypes = {
   isOver: Proptypes.bool.isRequired,
   updateIsOver: Proptypes.func.isRequired,
   playerOne: Proptypes.object.isRequired,
   playerTwo: Proptypes.object.isRequired,
   history: Proptypes.shape({
      push: Proptypes.func.isRequired
   }).isRequired
};

const Styles = StyleSheet.create({
   container: {},
   playerContainer: {
      display: 'flex',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#6D6E71',
      marginTop: 10,
      padding: 5
   }
});

const mapStateToProps = state => ({
   isOver: state.game.isOver,
   playerOne: state.game.playerOne,
   playerTwo: state.game.playerTwo
});
const mapDispatchToProps = dispatch => ({
   updateIsOver: value => dispatch(setIsOver(value))
});

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(GameScene)
);
