import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Firebase from "firebase";
import { Button, Form } from "react-bootstrap";
import { message } from "antd";
import { RAZOR_PAY_API_KEY, SERVER_URI } from "../../constants/server";
import axios from "axios";

import "./styles.css";
import {
  CardCustom,
  NavbarCustom,
  OrderCards,
  Loading,
} from "../../components";
import { CartActions, UserActions, OrderActions } from "../../redux/actions";

const OrderSummaryScreen = (props) => {
  const [name, setName] = useState(props.user.name);
  const [apartmentNumber, setApartmentNumber] = useState(
    props.user.apartmentNumber
  );
  const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);
  const history = useHistory();

  useEffect(() => {
    if (props.order.success && !props.order.loading) {
      history.push("/success");
    } else if (
      !props.order.success &&
      !props.order.loading &&
      props.order.err
    ) {
      message.error(
        "There was an error in proccessing your order. Please try again after some time!"
      );
    }
  }, [props.order.success]);

  const onClickAdd = () => {
    props.addNewOrder(
      props.cart.cart,
      props.cart.totalAmount,
      props.cart.totalItems,
      name,
      apartmentNumber,
      phoneNumber,
      "savories"
    );
  };

  const paymentHandlerPurchase = (name, phoneNumber, payment_amount) => {
    let user = JSON.parse(localStorage.getItem("@user"));
    const self = this;
    const options = {
      key: RAZOR_PAY_API_KEY,
      amount: parseFloat(payment_amount) * 100,
      name: "Green Kitchen",
      description: `Purchase by ${name}`,
      handler(response) {
        const paymentId = response.razorpay_payment_id;
        const url = `${SERVER_URI}/order/capture-payment`;
        const hide = message.loading("Processing your payment", 0);
        // Using my server endpoints to capture the payment
        axios
          .post(url, {
            payId: paymentId,
            items: props.cart.cart,
            totalAmount: props.cart.totalAmount,
            totalItems: props.cart.totalItems,
            name,
            apartmentNumber,
            phoneNumber,
            type: "savories",
          })
          .then((resp) => {
            if (resp.status === 200) {
              console.log("look", resp.data);
              props.addNewOrderSuccess(resp.data);
              hide();
              history.push("/success");
            } else {
              hide();
              message.error(
                "There was an error in proccessing your order. Please try again after some time!"
              );
            }
          })

          .catch(function (error) {
            console.log("Request failed", error);
          });
      },
      prefill: {
        contact: "+91".concat(phoneNumber),
      },
      modal: {
        ondismiss: function () {
          window.location.reload();
        },
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  let cart = Object.values(props.cart.cart);
  return (
    <div>
      <NavbarCustom />
      <div
        style={{ marginLeft: "5%", marginTop: "3%" }}
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </div>
      <div className="title-container">
        <h2>Order Summary</h2>
      </div>
      <div className="ordering-container">
        <div className="items-cont-sum">
          <p style={{ flex: 2.5 }}>Item</p>
          <p style={{ flex: 1, textAlign: "center" }}>Qty</p>
          <p style={{ flex: 1, textAlign: "center" }}>Cost</p>
        </div>
        {cart.length > 0 ? (
          cart.map((item, index) => {
            return (
              <div className="items-cont-sum">
                <p style={{ flex: 2.5 }}>{item.name}</p>
                <p style={{ flex: 1, textAlign: "center" }}>{item.count}</p>
                <p style={{ flex: 1, textAlign: "center" }}>
                  <span>&#8377;</span>{" "}
                  {parseInt(item.value) * parseInt(item.count)}
                </p>
              </div>
            );
          })
        ) : (
          <div>Please Add Something To Your Cart</div>
        )}
        <div
          style={{ backgroundColor: "#696969", height: "2px", width: "90%" }}
        />
        <div className="items-cont-sum">
          <p style={{ flex: 2.5 }}>Total</p>
          <p style={{ flex: 1, textAlign: "center" }}>
            {props.cart.totalItems}
          </p>
          <p style={{ flex: 1, textAlign: "center" }}>
            <span>&#8377;</span> {props.cart.totalAmount}
          </p>
        </div>
        <Form style={{ width: "90%" }}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Appartment Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Appartment Number"
              value={apartmentNumber}
              onChange={(e) => {
                setApartmentNumber(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone Number</Form.Label>

            <Form.Control
              type="number"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              disabled={props.user.phoneNumber ? true : false}
            />
            <Form.Text className="text-muted">
              Please enter your 10 digit mobile number without any spaces or
              special characters. For example 9113294945
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            style={{ width: "100%" }}
            onClick={() => {
              if (name.length === 0) {
                message.error("Please fill in your name!");
              } else if (apartmentNumber.length === 0) {
                message.error("Please fill in your apartment number!");
              } else if (phoneNumber.length === 0) {
                message.error("Please fill in your phone number!");
              }
              //  else if (phoneNumber.length !== 10) {
              //   message.error(
              //     "The Phone number you entered is incorrect. Please enter 10 digits."
              //   );
              // }
              else {
                paymentHandlerPurchase(
                  name,
                  phoneNumber,
                  props.cart.totalAmount
                );
              }
            }}
          >
            Place Order !
          </Button>
        </Form>
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
      addNewOrder: OrderActions.addNewOrder,
      addNewOrderSuccess: OrderActions.addNewOrderSuccess,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryScreen);
