import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const MenuTab = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ margin: "5%" }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        onClick={handleClick}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
          icon={<HomeOutlined />}
          key="1"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          Home
        </Menu.Item>
        <SubMenu key="sub2" title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuTab;
