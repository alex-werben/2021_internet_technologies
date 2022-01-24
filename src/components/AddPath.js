import React, { useContext } from 'react';
import PathForm from './PathForm';
import { useParams } from 'react-router-dom';
import ShipContext from '../context/ShipContext';

const AddPath = ({ history }) => {
  const { Ships, setShips } = useContext(ShipContext);
  const { id } = useParams();
  const shipToEdit = Ships.find((ship) => ship.id === id);

  const handleOnSubmit = (ship) => {
    const filteredShips = Ships.filter((ship) => ship.id !== id);
    setShips([ship, ...filteredShips]);
    history.push('/');
  };

  return (
    <div>
      <PathForm ship={shipToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddPath;
