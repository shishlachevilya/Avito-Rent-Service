import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DetailPage, HomePage } from '../Pages';
import './app.scss';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <HomePage/>
      </Route>

      <Route path="/detail/:id" render={ ({match}) => (
        <DetailPage id={match.params.id}/>
      )}/>
    </Switch>
  );
};

export default App;
