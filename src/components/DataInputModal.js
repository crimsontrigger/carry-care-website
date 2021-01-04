import React, { useState, useEffect } from "react";
import { Input, Modal } from "antd";

const DataInputModal = ({
  addRow,
  columns,
  visible,
  setVisible,
  isEdit,
  editedRowData,
  editRow,
}) => {
  const handleOk = () => {
    // TO DO: Add an edit function
    if (isEdit) {
      editRow({ ...rowData });
    } else {
      addRow({ ...rowData });
    }
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const [rowData, setRowData] = useState({});

  useEffect(() => {
    console.log(isEdit, editedRowData);
    if (isEdit) {
      console.log("is edit");
      setRowData({ ...editedRowData });
    }
  }, [isEdit, editedRowData]);

  useEffect(() => {
    console.log("rowData changed: ", rowData);
  }, [rowData]);

  return (
    <Modal
      title={"Add Row"}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {columns.map((column) => (
        <>
          <Input
            style={{ marginTop: "1%" }}
            required
            placeholder={column.title}
            onChange={(e) => {
              let tempData = rowData;
              tempData[column.dataIndex] = e.target.value;
              console.log(tempData);
              setRowData({ ...tempData });
            }}
            value={rowData[column.key]}
          ></Input>
        </>
      ))}
    </Modal>
  );
};

export default DataInputModal;
