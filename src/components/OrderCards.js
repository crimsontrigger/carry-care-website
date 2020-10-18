import React from "react";
import { Card, Button } from "react-bootstrap";
import { Button as AntButton } from "antd";
import { CartActions } from "../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./styles.css";

const OrderCards = (props) => {
  const onAdd = (index) => {
    let itemsVal = props.cart.items;
    let changeVal = props.cart.items[index];
    changeVal.count += 1;
    itemsVal[index] = changeVal;
    props.addItems(itemsVal);
    let total = props.cart.totalAmount + parseInt(changeVal.value);
    let count = props.cart.totalItems + 1;
    props.addTotal(total, count);
  };

  const onRemove = (index) => {
    let itemsVal = props.cart.items;
    let changeVal = props.cart.items[index];
    changeVal.count -= 1;
    itemsVal[index] = changeVal;
    props.addItems(itemsVal);
    let total = props.cart.totalAmount - parseInt(changeVal.value);
    let count = props.cart.totalItems - 1;
    props.addTotal(total, count);
  };
  return (
    <Card style={{ width: "18rem" }} className="cards-container-order">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Rs.
          {props.text}
        </Card.Text>
        {props.count === 0 || !props.count ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            onClick={() => {
              onAdd(props.index);
            }}
          >
            <AntButton
              style={{
                width: "60%",
                height: "70%",
                backgroundColor: "#2DE67D",
                color: "white",
                borderRadius: "5px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Add
            </AntButton>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outline-danger"
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                onRemove(props.index);
              }}
            >
              <img
                src="https://img.icons8.com/material/24/000000/minus--v1.png"
                height="20px"
                width="20px"
              />
            </Button>
            <Button
              variant="outline-primary"
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                fontWeight: "400",
              }}
              disabled
            >
              {props.count}
            </Button>
            <Button
              variant="outline-success"
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                onAdd(props.index);
              }}
            >
              <img
                src="https://img.icons8.com/metro/26/000000/plus-math.png"
                height="20px"
                width="20px"
              />
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { addItems: CartActions.addItems, addTotal: CartActions.addTotal },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderCards);
