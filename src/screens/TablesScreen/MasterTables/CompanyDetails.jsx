import React from "react";
import CustomTable from "./../../../components/CustomTable";

import "./../styles.css";

const CompanyDetails = () => {
  const data = [];

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

  return <CustomTable tableColumns={columns} tableData={data} />;
};

export default CompanyDetails;
