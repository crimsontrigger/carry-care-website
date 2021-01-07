import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Button from "react-bootstrap/Button";
import DataInputModal from "./../DataInputModal";
import { v4 as uuidv4 } from "uuid";
import { EditFilled } from "@ant-design/icons";

import "./styles.css";

const CustomTable = ({ tableData, tableColumns }) => {
  const [dataSource, setDataSource] = useState([]);
  const [showDataForm, setShowDataForm] = useState(false);

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editedRow, setEditedRow] = useState({});

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
    let tempData = dataSource;
    rowData.key = uuidv4();
    tempData.push(rowData);
    setDataSource([...tempData]);
    setSelectedRows([]);
    console.log(dataSource);
  };

  const editRow = (rowData) => {
    let tempData = dataSource;
    tempData.forEach((row) => {
      if (row.key === rowData.key && row !== rowData) {
        row = Object.assign(row, rowData);
        console.log("old row data: ", row);
        console.log("new row data: ", rowData);
      }
    });
    setDataSource([...tempData]);
    setSelectedRows([]);
    setIsEdit(false);
    console.log(dataSource);
  };

  const handleAddData = () => {
    setIsEdit(false);
    setEditedRow({});
    setShowDataForm(true);
  };

  const handleEdit = (record) => {
    console.log("edit is clicked", record.key, record);
    setIsEdit(true);
    setEditedRow(record);
    setShowDataForm(true);
  };

  const handleDelete = () => {
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

  const columns = [
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <EditFilled className="edit-icon" onClick={() => handleEdit(record)} />
      ),
    },
    ...tableColumns,
  ];

  return (
    <div style={{ width: "100%" }}>
      <DataInputModal
        addRow={addRow}
        columns={tableColumns}
        setVisible={setModalVisible}
        visible={showDataForm}
        isEdit={isEdit}
        editedRowData={editedRow}
        editRow={editRow}
      />
      <div className={"table-actions-container"}>
        <Button
          variant={"primary"}
          onClick={handleAddData}
          className="table-actions-button"
        >
          Add Row
        </Button>
        {showDeleteButton && (
          <Button
            variant={"danger"}
            onClick={handleDelete}
            className="table-actions-button"
          >
            {selectedRows.length > 1
              ? "Delete Selected Rows"
              : "Delete Selected Row"}
          </Button>
        )}
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{ ...rowSelection }}
      />
    </div>
  );
};

export default CustomTable;
