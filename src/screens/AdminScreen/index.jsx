import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ItemActions, AdminActions } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { CardCustom, NavbarCustom, CarousalCustom } from "../../components";

const AdminScreen = (props) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const onClickAdd = () => {
    props.addNewItem(emailId, password, "diwaliSavories");
  };
  const history = useHistory();

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
        <div
          style={{
            height: "2px",
            width: "100%",
            marginTop: "2%",
            backgroundColor: "#696969",
          }}
        />
        <Button
          onClick={() => {
            history.push("/adm/view-orders-savories");
          }}
          style={{ marginTop: "3%" }}
        >
          View Savories Orders
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, user: state.user, order: state.order };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addNewItem: ItemActions.addNewItem,
      getOrdersType: AdminActions.getOrdersType,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
