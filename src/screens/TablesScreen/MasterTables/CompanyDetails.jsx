import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Button from "react-bootstrap/Button";
import DataInputModal from "./../../../components/DataInputModal";
import "./../styles.css";

const CompanyDetails = () => {
  const [dataSource, setDataSource] = useState([]);
  const [showDataForm, setShowDataForm] = useState(false);

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

  useEffect(() => {
    console.log("data: ", dataSource);
  }, [dataSource]);

  const addRow = (rowData) => {
    let tempData = dataSource;
    rowData.key = tempData.length + 1;
    tempData.push(rowData);
    setDataSource([...tempData]);
    console.log(dataSource);
  };

  const handleAddData = () => {
    setShowDataForm(true);
  };

  const setModalVisible = (tempbool) => {
    setShowDataForm(tempbool);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User", // Column configuration not to be checked
    //   name: record.name,
    // }),
  };

  return (
    <div style={{ width: "100%" }}>
      <DataInputModal
        addRow={addRow}
        columns={columns}
        setVisible={setModalVisible}
        visible={showDataForm}
      />
      <div className={"table-actions-container"}>
        <Button variant={"primary"} onClick={handleAddData}>
          Add Row
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{ ...rowSelection }}
      />
    </div>
  );
};

export default CompanyDetails;
