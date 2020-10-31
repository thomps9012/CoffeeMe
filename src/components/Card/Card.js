import React from "react";
import './Card.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import CardBtn from '../CardBtn/CardBtn';
import Cortado from '../../images/cortado.jpg';


function CoffeeCard () {
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Cortado} />
        <Card.Body>
          <Card.Title>Coffee Drink Name</Card.Title>
          <Card.Text>
            A quick description of the drink will go here
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Shots of Espresso / Drip</ListGroupItem>
          <ListGroupItem>Milk / other ingredient</ListGroupItem>
          <ListGroupItem>Any other ingredient here</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <CardBtn />
        </Card.Body>
      </Card>
      </>
    );
}

export default CoffeeCard;