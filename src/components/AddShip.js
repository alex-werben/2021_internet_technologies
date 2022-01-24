import React, { useContext } from 'react';
import ShipForm from './ShipForm';
import ShipContext from '../context/ShipContext';

const AddShip = ({ history }) => {
  const { Ships, setShips } = useContext(ShipContext);

  const handleOnSubmit = (ship) => {
    setShips([ship, ...Ships]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ShipForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddShip;
