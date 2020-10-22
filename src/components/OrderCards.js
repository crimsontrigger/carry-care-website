import React from "react";
import { Card, Button } from "react-bootstrap";
import { Button as AntButton } from "antd";
import { CartActions } from "../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PlusIcon from "../assets/plus.png";
import MinusIcon from "../assets/minus.png";
import "./styles.css";

const OrderCards = (props) => {
  const onAdd = (index) => {
    let currCart = props.cart.cart;
    if (currCart[props.itemNumber]) {
      currCart[props.itemNumber].count += 1;
    } else {
      currCart[props.itemNumber] = {
        count: props.count,
        name: props.name,
        value: props.value,
        itemNumber: props.itemNumber,
      };
      currCart[props.itemNumber].count += 1;
    }
    props.addToCart(currCart);
    let total = props.cart.totalAmount + parseInt(props.value);
    let count = props.cart.totalItems + 1;
    props.addTotal(total, count);
  };

  const onRemove = (index) => {
    let currCart = props.cart.cart;
    if (currCart[props.itemNumber].count > 1) {
      currCart[props.itemNumber].count -= 1;
    } else {
      delete currCart[props.itemNumber];
    }
    props.addToCart(currCart);
    let total = props.cart.totalAmount - parseInt(props.value);
    let count = props.cart.totalItems - 1;
    props.addTotal(total, count);
  };

  return (
    <Card style={{ width: "18rem" }} className="cards-container-order">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <span>&#8377;</span> {props.value}
        </Card.Text>
        {!props.cart.cart[props.itemNumber] ? (
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
                height: "100%",
                backgroundColor: "#5cb85c",
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
              variant="danger"
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
              <img src={MinusIcon} height="20px" width="20px" />
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
                borderRadius: "0px",
                borderRight: "0px",
                borderLeft: "0px",
              }}
              disabled
            >
              {props.cart.cart[props.itemNumber].count}
            </Button>
            <Button
              variant="success"
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
              <img src={PlusIcon} height="20px" width="20px" />
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
    {
      addItems: CartActions.addItems,
      addTotal: CartActions.addTotal,
      addToCart: CartActions.addToCart,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderCards);
