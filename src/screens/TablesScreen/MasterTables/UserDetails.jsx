import React from "react";
import { Table } from "antd";

const UserDetails = () => {
  const columns = [
    {
      title: "NUM_USER_id",
      dataIndex: "NUM_USER_id",
      key: "NUM_USER_id",
    },
    {
      title: "VCH_USER_name",
      dataIndex: "VCH_USER_name",
      key: "VCH_USER_name",
    },
    {
      title: "NUM_created_by",
      dataIndex: "NUM_created_by",
      key: "NUM_created_by",
    },
    {
      title: "DTT_creation_date",
      dataIndex: "DTT_creation_date",
      key: "DTT_creation_date",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Table columns={columns} />
    </div>
  );
};

export default UserDetails;
