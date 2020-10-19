import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Firebase from "firebase";

import "./styles.css";
import {
  CardCustom,
  NavbarCustom,
  OrderCards,
  Loading,
} from "../../components";
import { CartActions } from "../../redux/actions";

const OrderSummaryScreen = (props) => {
  let cart = Object.values(props.cart.cart);
  return (
    <div>
      <NavbarCustom />
      <div className="title-container">
        <h2>Savories</h2>
      </div>
      <div className="ordering-container">
        {cart.length > 0 ? (
          cart.map((item, index) => {
            return <div style={{ marginTop: "2%" }}>{item.name}</div>;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addItems: CartActions.addItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryScreen);
