import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setIsOver } from '../../store/reducers/game/actions';
import * as routes from '../common/appRoutes';
import PlayButton from '../common/components/PlayButton';
import { Styles } from './Header.style';
import SelectPlayersModal from '../scenes/StatisticsScene/components/SelectPlayersModal';

const pathTitleMap = {
   [routes.GAME]: 'Game',
   [routes.STATISTICS]: 'Statistics'
};

function Header({ history, location, isOver, updateIsOver }) {
   const { pathname } = location;
   const [showModal, setShowModal] = useState(false);
   const isGamePath = pathname === routes.GAME;
   const isStatisticPath = pathname === routes.STATISTICS;
   function toggleModal() {
      setShowModal(!showModal);
   }
   return (
      <div className={css(Styles.container)}>
         <div
            className={css(Styles.brandContainer)}
            onClick={() => !isStatisticPath && history.push(routes.STATISTICS)}
            role="presentation"
         >
            <span className={css(Styles.brandText)}>Game of Drones</span>
         </div>
         <div className={css(Styles.titleContainer)}>
            <span className={css(Styles.titleText)}>{pathTitleMap[pathname] || 'Home'}</span>
         </div>
         {(!isGamePath || isOver) && (
            <PlayButton
               text={isGamePath ? 'Play Again' : 'Play Now'}
               onClick={() => {
                  updateIsOver();
                  if (!isGamePath) {
                     toggleModal();
                  }
               }}
            />
         )}
         {showModal && <SelectPlayersModal close={toggleModal} />}
      </div>
   );
}

Header.propTypes = {
   location: PropTypes.shape({
      pathname: PropTypes.string
   }).isRequired,
   history: PropTypes.shape({
      push: PropTypes.func.isRequired
   }).isRequired,
   isOver: PropTypes.bool.isRequired,
   updateIsOver: PropTypes.func.isRequired
};

export default withRouter(
   connect(
      state => ({
         isOver: state.game.isOver
      }),
      dispatch => ({
         updateIsOver: () => dispatch(setIsOver(false))
      })
   )(Header)
);
