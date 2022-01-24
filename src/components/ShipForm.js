import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ShipForm = (props) => {
  const [ship, setShip] = useState(() => {
    return {
      shipname: props.ship ? props.ship.shipname : '',
      type: props.ship ? props.ship.type : '',
      path: props.ship ? props.ship.path : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { shipname, type, path } = ship;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [shipname, type];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const ship = {
        id: uuidv4(),
        shipname,
        type,
        path,
        date: new Date()
      };
      props.handleOnSubmit(ship);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setShip((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Название судна</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="shipname"
            value={shipname}
            placeholder="Введите название судна"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Тип судна</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="type"
            value={type}
            placeholder="Укажите тип"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Подтвердить
        </Button>
      </Form>
    </div>
  );
};

export default ShipForm;
