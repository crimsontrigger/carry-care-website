import React, { useState, useEffect } from "react";
import CustomTable from "./../../../components/CustomTable";

import "./../styles.css";

const UserDetails = () => {
  const data = [];

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

  return <CustomTable tableColumns={columns} tableData={data} />;
};

export default UserDetails;
