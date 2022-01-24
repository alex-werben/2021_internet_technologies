import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Ship = ({
  id,
  date,
  handleRemoveShip,
  shipname,
  path,
  weight,
  type
}) => {
  const history = useHistory();

  if (type == "Грузовое")
  {
    return (
      <Card style={{ width: '20rem' }} className="book">
        <Card.Body>
          <Card.Title className="ship-title">{shipname}</Card.Title>
          <div className="ship-details">
            <div>Тип: {type}</div>
            <div>Груз: {weight}</div>
            <div>Путь: {path}</div>
            <div>Дата: {new Date(date).toDateString()}</div>
          </div>
          <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Изменить
          </Button>{' '}
          <Button variant="success" onClick={() => history.push(`/path/${id}`)}>
            Рейс
          </Button>{' '}
          <Button variant="danger" onClick={() => handleRemoveShip(id)}>
            Удалить
          </Button>
          
  
        </Card.Body>
      </Card>
    );
  }
  else
  {
    return (
      <Card style={{ width: '18rem' }} className="book">
        <Card.Body>
          <Card.Title className="ship-title">{shipname}</Card.Title>
          <div className="ship-details">
            <div>Тип: {type}</div>
            <div>Путь: {path}</div>
            <div>Дата: {new Date(date).toDateString()}</div>
          </div>
          <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Изменить
          </Button>{' '}
          <Button variant="success" onClick={() => history.push(`/path/${id}`)}>
            Добавить рейс
          </Button>
          <Button variant="danger" onClick={() => handleRemoveShip(id)}>
            Удалить
          </Button>
          
  
        </Card.Body>
      </Card>
    );
  }

};

export default Ship;
