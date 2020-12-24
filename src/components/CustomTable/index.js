import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Button from "react-bootstrap/Button";
import DataInputModal from "./../DataInputModal";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";

const CustomTable = ({ tableData, tableColumns }) => {
  const [dataSource, setDataSource] = useState([]);
  const [showDataForm, setShowDataForm] = useState(false);

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    console.log("data: ", dataSource);
  }, [dataSource]);

  // This should not be necessary once redux is added
  useEffect(() => {
    if (tableData.length > 0) setDataSource([...tableData]);
    else setDataSource([]);
  }, [tableData]);

  useEffect(() => {
    if (selectedRows.length > 0) {
      setShowDeleteButton(true);
    } else {
      setShowDeleteButton(false);
    }
  }, [selectedRows]);

  const addRow = (rowData) => {
    // TO DO:
    // manipulation of data should either be done to redux state or in the parent component of CustomTable
    // bug - assigning row key is wrong, and causes the deletion of data to break
    let tempData = dataSource;
    rowData.key = uuidv4();
    tempData.push(rowData);
    setDataSource([...tempData]);
    setSelectedRows([]);
    console.log(dataSource);
  };

  const handleAddData = () => {
    setShowDataForm(true);
  };

  const handleDelete = () => {
    // TO DO:
    // manipulation of data should either be done to redux state or in the parent component of CustomTable
    // bug - deletion breaks for some reason just after adding a new element
    selectedRows.forEach((row) => {
      let tempData = dataSource;
      const index = tempData.indexOf(row);
      tempData.splice(index, 1);
      setDataSource([...tempData]);
    });
    setSelectedRows([]);
  };

  const setModalVisible = (tempbool) => {
    setShowDataForm(tempbool);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows);
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
        columns={tableColumns}
        setVisible={setModalVisible}
        visible={showDataForm}
      />
      <div className={"table-actions-container"}>
        <Button variant={"primary"} onClick={handleAddData}>
          Add Row
        </Button>
        {showDeleteButton && (
          <Button variant={"primary"} onClick={handleDelete}>
            {selectedRows.length > 1
              ? "Delete Selected Rows"
              : "Delete Selected Row"}
          </Button>
        )}
      </div>
      <Table
        columns={tableColumns}
        dataSource={dataSource}
        rowSelection={{ ...rowSelection }}
      />
    </div>
  );
};

export default CustomTable;
