import { css } from 'aphrodite';
import Proptypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../../../common/components/Button';
import { createPlayer, getAllPlayers } from '../../../../api/player';
import { setList } from '../../../../store/reducers/statistics/actions';
import { Styles } from './CreatePlayerModal.style';

function CreatePlayerModal({ close, loadList }) {
   const [name, setName] = useState('');
   const onNameChanged = e => {
      setName(e.target.value);
   };

   function save() {
      createPlayer(name).then(() => {
         getAllPlayers().then(data => {
            loadList(data.list);
            close();
         });
      });
   }
   return (
      <div className={css(Styles.backdropContainer)}>
         <div className={css(Styles.modalContainer)}>
            <div className={css(Styles.modalHeaderContainer)}>
               <span className={css(Styles.modalHeaderTitle)}>Create Player</span>
            </div>
            <div className={css(Styles.modalBodyContainer)}>
               <span className={css(Styles.labelText)}>Name:</span>
               <input
                  value={name}
                  className={css(Styles.inputField)}
                  type="text"
                  onChange={onNameChanged}
               />
            </div>
            <div className={css(Styles.modalFooterContainer)}>
               <Button type="normal" onClick={close}>
                  {'Cancel'}
               </Button>
               <Button disabled={name === ''} type="fill" onClick={save} style={{ marginLeft: 10 }}>
                  {'Save'}
               </Button>
            </div>
         </div>
      </div>
   );
}

CreatePlayerModal.propTypes = {
   close: Proptypes.func.isRequired,
   loadList: Proptypes.func.isRequired
};

const mapStateToProps = () => ({});
const mapDispacthToProps = dispatch => ({
   loadList: list => dispatch(setList(list))
});

export default connect(
   mapStateToProps,
   mapDispacthToProps
)(CreatePlayerModal);
