import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddShip from '../components/AddShip';
import ShipList from '../components/ShipList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditShip from '../components/EditShip';
import ShipContext from '../context/ShipContext';
import AddPath from '../components/AddPath';

const AppRouter = () => {
  const [Ships, setShips] = useLocalStorage('Ships', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <ShipContext.Provider value={{ Ships, setShips }}>
            <Switch>
              <Route component={ShipList} path="/" exact={true} />
              <Route component={AddShip} path="/add" />
              <Route component={EditShip} path="/edit/:id" />
              <Route component={AddPath} path="/path/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </ShipContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
