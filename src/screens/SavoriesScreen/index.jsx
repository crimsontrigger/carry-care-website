import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./styles.css";
import {
  CardCustom,
  NavbarCustom,
  OrderCards,
  Loading,
} from "../../components";
import { CartActions, ItemActions } from "../../redux/actions";

const SavoriesScreen = (props) => {
  useEffect(() => {
    props.getItemType("diwaliSavories");
  }, []);
  const history = useHistory();

  return (
    <div>
      <NavbarCustom />
      <div className="title-container">
        <h2>Savories</h2>
      </div>
      <div className="ordering-container">
        {props.item.items.length > 0 && props.item.loading === false ? (
          props.item.items.map((item, index) => {
            return (
              <div style={{ marginTop: "2%" }}>
                <OrderCards
                  name={item.name}
                  value={item.value}
                  count={item.count}
                  itemNumber={item._id}
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
        <div
          className="footer-container"
          onClick={() => {
            history.push("/summary");
          }}
        >
          <div
            className="footer-compo"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>&#8377;</span> {props.cart.totalAmount}
          </div>
          <div className="footer-compo">CART</div>
          <div className="footer-compo">{props.cart.totalItems} Items</div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.cart, item: state.item };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { addItems: CartActions.addItems, getItemType: ItemActions.getItemType },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SavoriesScreen);
