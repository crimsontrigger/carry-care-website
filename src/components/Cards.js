import React from "react";
import { Card, Button } from "react-bootstrap";

import "./styles.css";

const CardCustom = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="cards-container">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;
