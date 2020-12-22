import React, { useState, useEffect } from "react";
import CustomTable from "./../../../components/CustomTable";
import "./../styles.css";

const EmployeeDetails = () => {
  const data = [];

  const columns = [
    {
      title: "NUM_LABOUR_id",
      dataIndex: "NUM_LABOUR_id",
      key: "NUM_LABOUR_id",
    },
    {
      title: "VCH_LABOUR_name",
      dataIndex: "VCH_LABOUR_name",
      key: "VCH_LABOUR_name",
    },
    {
      title: "NUM_SALARY_PER_DAY",
      dataIndex: "NUM_SALARY_PER_DAY",
      key: "NUM_SALARY_PER_DAY",
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

export default EmployeeDetails;
