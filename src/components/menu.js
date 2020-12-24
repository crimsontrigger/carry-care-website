import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuTab = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleClick = (e) => {
    console.log("click ", e);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme={"light"}
      >
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Master Tables">
            <Menu.Item key="6">
              <Link
                to="/master/supplier_details"
                style={{ textDecoration: "none" }}
              >
                Supplier Details
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link
                to="/master/customer_details"
                style={{ textDecoration: "none" }}
              >
                Customer Details
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link
                to="/master/employee_details"
                style={{ textDecoration: "none" }}
              >
                Employee Details
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link
                to="/master/user_details"
                style={{ textDecoration: "none" }}
              >
                User Details
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link
                to="/master/company_details"
                style={{ textDecoration: "none" }}
              >
                Company Details
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9">Files</Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default MenuTab;
