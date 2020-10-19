import React, { useState } from "react";
import Firebase from "firebase";
import { Form, Button } from "react-bootstrap";

import "./styles.css";
import { CardCustom, NavbarCustom, CarousalCustom } from "../../components";

const AdminScreen = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const db = Firebase.firestore();
  const onClickAdd = () => {
    let itemNumber = Math.floor(Math.random() * 10000000 + 1).toString();
    let fin = emailId.concat(itemNumber);
    db.collection("items").add({
      name: emailId,
      value: password,
      count: 0,
      itemNumber: fin,
    });
  };
  return (
    <div>
      <NavbarCustom />
      <div className="content-container">
        Add Savories
        <Form>
          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={emailId}
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Amount"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              onClickAdd();
            }}
          >
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AdminScreen;
