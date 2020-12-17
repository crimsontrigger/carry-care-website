import React from "react";
import { Table } from "antd";

const CompanyDetails = () => {
  const columns = [
    {
      title: "NUM_company_id",
      dataIndex: "NUM_company_id",
      key: "NUM_company_id",
    },
    {
      title: "VCH_company_name",
      dataIndex: "VCH_company_name",
      key: "VCH_company_name",
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

export default CompanyDetails;
