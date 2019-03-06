import { css } from 'aphrodite';
import Proptypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setList } from '../../../../store/reducers/statistics/actions';
import { clearPlayers } from '../../../../store/reducers/game/actions';
import Button from '../../../common/components/Button';
import { getAllPlayers } from '../../../../api/player';
import CreatePlayerModal from './CreatePlayerModal';
import { Styles } from './StatisticsScene.style';

function StatisticsScene({ list, loadList, resetPlayers }) {
   const [showModal, setShowModal] = useState(false);
   useEffect(() => {
      resetPlayers();
      getAllPlayers().then(data => {
         loadList(data.list);
      });
   }, []);
   function toggleModal() {
      setShowModal(!showModal);
   }
   return (
      <div className={css(Styles.container)}>
         <div className={css(Styles.actionBarContainer)}>
            <Button type="link" onClick={toggleModal}>
               {'Create Player'}
            </Button>
         </div>
         {list.length > 0 && (
            <div className={css(Styles.listContainer)}>
               {list.map(player => (
                  <div key={player.id} className={css(Styles.itemContainer)}>
                     <span className={css(Styles.nameText)}>{player.name}</span>
                     <div className={css(Styles.numInfoContainer)}>
                        <span className={css(Styles.totalGamesValueText)}>{player.totalGames}</span>
                        <span className={css(Styles.totalGamesLabelText)}>Total Games</span>
                     </div>
                     <div className={css(Styles.columnInfoContainer)}>
                        <div className={css(Styles.rowInfoContainer)}>
                           <span className={css(Styles.winsLabelText)}>Victories</span>
                           <span className={css(Styles.winsValueText)}>{player.totalWins}</span>
                        </div>
                        <div className={css(Styles.rowInfoContainer)}>
                           <span className={css(Styles.defeatsLabelText)}>Defeats</span>
                           <span className={css(Styles.defeatsValueText)}>
                              {player.totalDefeats}
                           </span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
         {showModal && <CreatePlayerModal close={toggleModal} />}
      </div>
   );
}

StatisticsScene.propTypes = {
   list: Proptypes.array.isRequired,
   loadList: Proptypes.func.isRequired,
   resetPlayers: Proptypes.func.isRequired
};

const mapStateToProps = state => ({
   list: state.statistics.list
});
const mapDispatchToProps = dispatch => ({
   loadList: list => dispatch(setList(list)),
   resetPlayers: () => dispatch(clearPlayers())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(StatisticsScene);
