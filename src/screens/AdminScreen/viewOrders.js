import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ItemActions, AdminActions } from "../../redux/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./styles.css";
import { CardCustom, NavbarCustom, Loading } from "../../components";
import { AdminTypes } from "../../redux/types";

const ViewOrdersScreen = (props) => {
  const [currentScreen, setCurrentScreen] = useState("NEW");
  const [nextScreen, setNextScreen] = useState("PROCESSING");
  useEffect(() => {
    props.getOrdersType("savories", "NEW");
  }, []);

  const onChangeScreen = (type, next) => {
    setCurrentScreen(type);
    setNextScreen(next);
    props.getOrdersType("savories", type);
  };

  return (
    <div>
      <NavbarCustom />
      <div className="content-container">
        <h3>Savories Orders</h3>
      </div>
      <div className="order-list-cont">
        {!props.admin.loading ? (
          props.admin.orders.length > 0 ? (
            props.admin.orders.map((order, index) => {
              return (
                <div className="orders-cont">
                  <p className="order-text">
                    Name : {order.name}
                    <br />
                    Apartment Number : {order.apartmentNumber}
                    <br />
                    Phone Number : {order.phoneNumber}
                    <br />
                    Order Number : {order.orderNumber}
                  </p>
                  <div className="items-cont">
                    <p style={{ flex: 2.5 }}>Item</p>
                    <p style={{ flex: 1, textAlign: "center" }}>Qty</p>
                    <p style={{ flex: 1, textAlign: "center" }}>Cost</p>
                  </div>
                  {Object.values(order.items).map((item) => {
                    return (
                      <div className="items-cont">
                        <p style={{ flex: 2.5 }}>{item.name}</p>
                        <p style={{ flex: 1, textAlign: "center" }}>
                          {item.count}
                        </p>
                        <p style={{ flex: 1, textAlign: "center" }}>
                          <span>&#8377;</span>{" "}
                          {parseInt(item.value) * parseInt(item.count)}
                        </p>
                      </div>
                    );
                  })}
                  <div
                    style={{
                      backgroundColor: "#696969",
                      height: "2px",
                      width: "90%",
                    }}
                  />
                  <div className="items-cont">
                    <p style={{ flex: 2.5 }}>Total</p>
                    <p style={{ flex: 1, textAlign: "center" }}>
                      {order.totalItems}
                    </p>
                    <p style={{ flex: 1, textAlign: "center" }}>
                      <span>&#8377;</span> {order.totalAmount}
                    </p>
                  </div>
                  {currentScreen !== "DONE" && (
                    <div className="button-cont">
                      <Button variant="danger">Cancel</Button>

                      <Button
                        variant="success"
                        onClick={() => {
                          props.updateOrderStatus(order._id, nextScreen, index);
                        }}
                      >
                        Move To {nextScreen}
                      </Button>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ width: "100%", textAlign: "center" }}>
              There are no {currentScreen} orders!
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
      <div className="footer-container">
        <div
          className="footer-compo"
          style={{
            backgroundColor: currentScreen === "NEW" ? "#2de67d" : "whitesmoke",
          }}
          onClick={() => {
            onChangeScreen("NEW", "PROCESSING");
          }}
        >
          NEW
        </div>
        <div
          className="footer-compo"
          style={{
            backgroundColor:
              currentScreen === "PROCESSING" ? "#2de67d" : "whitesmoke",
          }}
          onClick={() => {
            onChangeScreen("PROCESSING", "DONE");
          }}
        >
          PROCESSING
        </div>
        <div
          className="footer-compo"
          style={{
            backgroundColor:
              currentScreen === "DONE" ? "#2de67d" : "whitesmoke",
          }}
          onClick={() => {
            onChangeScreen("DONE", "");
          }}
        >
          DONE
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { admin: state.admin };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getOrdersType: AdminActions.getOrdersType,
      updateOrderStatus: AdminActions.updateOrderStatus,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrdersScreen);
