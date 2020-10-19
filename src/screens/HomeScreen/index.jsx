import React from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";

import "./styles.css";
import { CardCustom, NavbarCustom, CarousalCustom } from "../../components";

const HomeScreen = () => {
  const history = useHistory();
  return (
    <div>
      <NavbarCustom />
      <CarousalCustom />
      <div className="content-container">
        <a
          onClick={() => {
            history.push("/savories");
          }}
        >
          <CardCustom
            title="Savories"
            text="Select from a range of savories by clicking here!"
          />
        </a>
        <a
          style={{ marginTop: isMobile ? "5%" : "0%" }}
          onClick={() => {
            history.push("/home");
          }}
        >
          <CardCustom
            title="Breakfast"
            text="Select from a range of savories by clicking here!"
          />
        </a>
        <a
          style={{
            marginTop: isMobile ? "5%" : "0%",
            marginBottom: isMobile ? "5%" : "0%",
          }}
          onClick={() => {
            history.push("/home");
          }}
        >
          <CardCustom
            title="Lunch"
            text="Select from a range of savories by clicking here!"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeScreen;
