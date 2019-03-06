import React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../common/appRoutes';
import { GameScene } from '../scenes/GameScene';
import { StatisticsScene } from '../scenes/StatisticsScene';
import Header from './Header';

function App() {
   return (
      <div>
         <Header />
         <Route path={routes.GAME} component={GameScene} exact />
         <Route path={routes.STATISTICS} component={StatisticsScene} exact />
      </div>
   );
}

export default App;
