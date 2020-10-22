import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Firebase from "firebase";
import { Button, Form } from "react-bootstrap";
import { message } from "antd";
import Lottie from "react-lottie";

import "./styles.css";
import {
  CardCustom,
  NavbarCustom,
  OrderCards,
  Loading,
} from "../../components";
import { CartActions, UserActions } from "../../redux/actions";
import * as animationData from "../../assets/33337-tick-pop.json";

const OrderSuccessScreen = (props) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <NavbarCustom />
      <div className="title-container">
        <h2>Your order has been successfully placed!</h2>
      </div>
      <div className="ordering-container">
        <Lottie options={defaultOptions} height={200} width={200} />
        <div>Your order number is {props.order.recentOrder.orderNumber}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { order: state.order };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccessScreen);
