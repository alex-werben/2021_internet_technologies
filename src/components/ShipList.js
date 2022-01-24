import React, { useContext } from 'react';
import _ from 'lodash';
import Ship from './Ship';
import ShipContext from '../context/ShipContext';

const ShipList = () => {
  const { Ships, setShips } = useContext(ShipContext);

  const handleRemoveShip = (id) => {
    setShips(Ships.filter((ship) => ship.id !== id));
  };

  return (
    <React.Fragment>
      <div className="ship-list">
        {!_.isEmpty(Ships) ? (
          Ships.map((ship) => (
            <Ship key={ship.id} {...ship} handleRemoveShip={handleRemoveShip} />
          ))
        ) : (
          <p className="message">Отсутствуют доступные корабли</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ShipList;
