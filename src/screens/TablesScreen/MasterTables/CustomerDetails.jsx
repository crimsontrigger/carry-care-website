import React, { useState, useEffect } from "react";
import CustomTable from "./../../../components/CustomTable";

import "./../styles.css";

const CustomerDetails = () => {
  const data = [];

  const columns = [
    {
      title: "NUM_CUSTOMER_ID",
      dataIndex: "NUM_CUSTOMER_ID",
      key: "NUM_CUSTOMER_ID",
    },
    {
      title: "VCH_CUSTOMER_Code",
      dataIndex: "VCH_CUSTOMER_Code",
      key: "VCH_CUSTOMER_Code",
    },
    {
      title: "VCH_CUSTOMER_NAME",
      dataIndex: "VCH_CUSTOMER_NAME",
      key: "VCH_CUSTOMER_NAME",
    },
    {
      title: "VCH_Phone_Number_1",
      dataIndex: "VCH_Phone_Number_1",
      key: "VCH_Phone_Number_1",
    },
    {
      title: "VCH_Phone_Number_2",
      dataIndex: "VCH_Phone_Number_2",
      key: "VCH_Phone_Number_2",
    },
    {
      title: "VCH_GST_Number",
      dataIndex: "VCH_GST_Number",
      key: "VCH_GST_Number",
    },
    {
      title: "VCH_Email_Id",
      dataIndex: "VCH_Email_Id",
      key: "VCH_Email_Id",
    },
    {
      title: "VCH_Address_1",
      dataIndex: "VCH_Address_1",
      key: "VCH_Address_1",
    },
    {
      title: "VCH_Address_2",
      dataIndex: "VCH_Address_2",
      key: "VCH_Address_2",
    },
    {
      title: "VCH_Address_3",
      dataIndex: "VCH_Address_3",
      key: "VCH_Address_3",
    },
    {
      title: "VCH_City",
      dataIndex: "VCH_City",
      key: "VCH_City",
    },
    {
      title: "VCH_State",
      dataIndex: "VCH_State",
      key: "VCH_State",
    },
    {
      title: "VCH_Pin_Code",
      dataIndex: "VCH_Pin_Code",
      key: "VCH_Pin_Code",
    },
    {
      title: "VCH_Contact_Person",
      dataIndex: "VCH_Contact_Person",
      key: "VCH_Contact_Person",
    },
    {
      title: "VCH_Contact_Person_Number",
      dataIndex: "VCH_Contact_Person_Number",
      key: "VCH_Contact_Person_Number",
    },
    {
      title: "VCH_CIN_Number",
      dataIndex: "VCH_CIN_Number",
      key: "VCH_CIN_Number",
    },
    {
      title: "VCH_Bank_Name",
      dataIndex: "VCH_Bank_Name",
      key: "VCH_Bank_Name",
    },
    {
      title: "VCH_AC_No",
      dataIndex: "VCH_AC_No",
      key: "VCH_AC_No",
    },
    {
      title: "VCH_Branch",
      dataIndex: "VCH_Branch",
      key: "VCH_Branch",
    },
    {
      title: "VCH_IFSC_Code",
      dataIndex: "VCH_IFSC_Code",
      key: "VCH_IFSC_Code",
    },
    {
      title: "VCH_HSN_Code",
      dataIndex: "VCH_HSN_Code",
      key: "VCH_HSN_Code",
    },
    {
      title: "NUM_CREATED_BY",
      dataIndex: "NUM_CREATED_BY",
      key: "NUM_CREATED_BY",
    },
    {
      title: "DTT_CREATION_DATE",
      dataIndex: "DTT_CREATION_DATE",
      key: "DTT_CREATION_DATE",
    },
  ];

  return <CustomTable tableColumns={columns} tableData={data} />;
};

export default CustomerDetails;
