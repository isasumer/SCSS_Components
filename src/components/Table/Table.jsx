import React, { useEffect, useState } from "react";
import * as Styles from "../../styles/components/Table.module.scss";
import Checkbox from "./Checkbox";

const Table = ({ columns, dataSource, selection }) => {
  const [_columns, set_columns] = useState([]);
  const [selectionList, setSelectionList] = useState([]);

  function handleSelectionChange(id) {
    console.log({ id });
    if (selectionList.includes(id)) {
      setSelectionList(
        selectionList.filter((selectedId) => console.log({ selectedId }))
      );
    } else {
      setSelectionList((list) => [...list, id]);
    }
  }
  console.log(selectionList);
  function handleSelectAll() {
    if (dataSource.length !== selectionList.length) {
      setSelectionList(dataSource.map((row) => row.campaignId));
    } else {
      setSelectionList([]);
    }
  }

  useEffect(() => {
    //put input in front of columns at first render
    if (selection) {
      const selectColumn = {
        name: "selection",
        caption: "",
        dataType: "object",
        render: (id) => (
          <Checkbox
            checked={selectionList.includes(id)}
            onToggle={() => handleSelectionChange(id)}
          />
        ),
      };

      set_columns([selectColumn, ...columns]);
    }
  }, []);

  function renderCell(mode, cellName, content) {
    return mode === "header" ? (
      <th key={cellName} className="cell cell-header">
        {cellName === "selection" ? ( // puts input into header
          <Checkbox
            checked={dataSource.length === selectionList.length}
            onToggle={() => handleSelectAll()}
          />
        ) : (
          content
        )}
      </th>
    ) : (
      <td className="cell">{content}</td>
    );
  }

  function renderTableHeading() {
    return _columns.map((column) =>
      renderCell("header", column.name, column.caption)
    );
  }

  function renderTableRows() {
    return dataSource.map((row) => {
      if (selection) {
        row.selection = row.campaignId;
      }
      return (
        <tr>
          {_columns.map((column) =>
            renderCell("row", null, column.render(row[column.name]))
          )}
        </tr>
      );
    });
  }

  return (
    <table className={Styles.tableContent}>
      <thead className={Styles.tableContentHeader}>
        {renderTableHeading()}
      </thead>
      <tbody className={Styles.tableContentRows}>{renderTableRows()}</tbody>
    </table>
  );
};

export default Table;
