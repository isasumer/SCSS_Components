import React, { useState } from "react";
import * as Styles from "../../styles/components/Table.module.scss";
import Checkbox from "./Checkbox";
import Pagination from "../Pagination";
import "../../styles/components/Table.scss";

const Table = ({ columns, dataSource, selection, searchData }) => {
  const [selectionList, setSelectionList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function handleSelectAll() {
    if (dataSource.length !== selectionList.length) {
      setSelectionList(dataSource.map((row) => row.campaignId));
    } else {
      setSelectionList([]);
    }
  }

  function handleSelectionChange(id) {
    if (selectionList.includes(id)) {
      setSelectionList((list) =>
        list.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectionList((list) => [...list, id]);
    }
  }

  function getColumns() {
    let _columns = [...columns];
    if (selection) {
      _columns.unshift({
        name: "selection",
        caption: "",
        dataType: "object",
        render: (id) => (
          <Checkbox
            checked={selectionList.includes(id)}
            onToggle={() => handleSelectionChange(id)}
          />
        ),
      });
    }
    return _columns;
  }

  function renderHeaderCell(cellName, content) {
    return (
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
    );
  }

  function renderRowCell(content, key) {
    return (
      <td key={key} className="cell">
        {content}
      </td>
    );
  }

  function renderTableHeading() {
    return getColumns().map((column) =>
      renderHeaderCell(column.name, column.caption)
    );
  }

  function getSearchedData() {
    if (searchData) {
      return dataSource.filter((item) =>
        JSON.stringify(item).toLowerCase()?.includes(searchData.toLowerCase())
      );
    }
    return dataSource;
  }

  function getRowData() {
    let _data = getSearchedData();
    const startIndex = currentPage * 8 - 8;
    const endIndex = startIndex + 8;
    return _data.slice(startIndex, endIndex);
  }

  function renderTableRows() {
    return getRowData().map((row) => {
      if (selection) {
        row.selection = row.campaignId;
      }
      return (
        <tr>
          {getColumns().map((column) =>
            renderRowCell(column.render(row[column.name], column.name))
          )}
        </tr>
      );
    });
  }

  return (
    <div>
      <div className="table-wrapper">
        <table className="table">
          <thead>{renderTableHeading()}</thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
      <Pagination
        totalCount={getSearchedData().length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
