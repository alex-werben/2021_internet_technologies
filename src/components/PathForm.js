import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const PathForm = (props) => {
  const [ship, setShip] = useState(() => {
    return {
      shipname: props.ship ? props.ship.shipname : '',
      type: props.ship ? props.ship.type : '',
      path: props.ship ? props.ship.path : '',
      weight: props.ship ? props.ship.weight : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { shipname, type, path, weight } = ship;

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
        weight,
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


  if (type === "Грузовое")
    return (
        <div className="main-form">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="path">
                <Form.Label>Рейс</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="path"
                    value={path}
                    placeholder="Введите пункт назначения"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="weight">
                <Form.Label>Груз</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="weight"
                    value={weight}
                    placeholder="Введите название груза"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
            Подтвердить
            </Button>
        </Form>
        </div>
    );
  else
    return (
        <div className="main-form">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="path">
            <Form.Label>Рейс</Form.Label>
            <Form.Control
                className="input-control"
                type="text"
                name="path"
                value={path}
                placeholder="Введите пункт назначения"
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

export default PathForm;
