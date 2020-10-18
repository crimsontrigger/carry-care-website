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

const SavoriesScreen = (props) => {
  const [items, setItems] = useState([]);
  const db = Firebase.firestore();

  useEffect(async () => {
    let res = await db.collection("items").get();
    let arr = [];
    res.forEach((doc) => {
      arr.push(doc.data());
    });
    // setItems(arr);
    props.addItems(arr);
  }, []);

  return (
    <div>
      <NavbarCustom />
      <div className="title-container">
        <h2>Savories</h2>
      </div>
      <div className="ordering-container">
        {props.cart.items.length > 0 ? (
          props.cart.items.map((item, index) => {
            return (
              <div style={{ marginTop: "2%" }}>
                <OrderCards
                  title={item.name}
                  text={item.value}
                  count={item.count}
                  index={index}
                />
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
      {props.cart.totalAmount > 0 && props.cart.totalItems > 0 && (
        <div className="footer-container">
          <div className="footer-compo">Rs.{props.cart.totalAmount}</div>
          <div className="footer-compo">CART</div>
          <div className="footer-compo">{props.cart.totalItems} Items</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addItems: CartActions.addItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SavoriesScreen);
