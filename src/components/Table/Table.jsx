import React, { useCallback, useEffect, useRef, useState } from "react";
import Checkbox from "./Checkbox";
import Pagination from "../Pagination";
import "../../styles/components/Table.scss";

const createColumnHeaders = (columns) => {
  return columns.map((item) => ({
    ...item,
    colRef: useRef(),
  }));
};

const Table = ({
  columns,
  dataSource,
  selection,
  searchData,
  Ref,
  minCellWidth,
}) => {
  const [tableHeight, setTableHeight] = useState("auto");
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);
  const [selectionList, setSelectionList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowNumberPerPage = 8;

  const __columns = getColumns();

  useEffect(() => {
    setTableHeight(tableElement.current.offsetHeight);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };
  const mouseMove = useCallback(
    (e) => {
      const gridColumns = __columns.map((col, i) => {
        if (i === activeIndex) {
          console.log("client:", e.clientX);
          console.log(
            "col.colRef?.current?.offsetLeft:",
            col.colRef?.current?.offsetLeft
          );
          const width = e.clientX - col.colRef?.current?.offsetLeft;
          console.log(width);
          if (width >= minCellWidth) {
            return `${width}px`;
          }
        }
        return `${col.colRef.current.offsetWidth}px`;
      });

      if (tableElement.current) {
        tableElement.current.style.gridTemplateColumns = `${gridColumns.join(
          " "
        )}`;
      } else return null;
    },
    [activeIndex, __columns, minCellWidth, tableElement]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);
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
    return createColumnHeaders(_columns);
  }

  function renderHeaderCell(column, i) {
    return (
      <th ref={column.colRef} key={column.name} className="cell cell-header">
        {column.name === "selection" ? ( // puts input into header
          <Checkbox
            checked={dataSource.length === selectionList.length}
            onToggle={() => handleSelectAll()}
          />
        ) : (
          <>
            <span>{column.caption}</span>
            <div
              style={{ height: tableHeight }}
              onMouseDown={() => mouseDown(i)}
              className={`resize-handle ${
                activeIndex === i ? "active" : "idle"
              }`}
            />
          </>
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
    const startIndex = currentPage * rowNumberPerPage - rowNumberPerPage;
    const endIndex = startIndex + rowNumberPerPage;
    return _data.slice(startIndex, endIndex);
  }

  /*We are rendering Table header here*/
  function renderTableHeading() {
    return __columns.map(renderHeaderCell);
  }

  /*We are rendering Table rows here*/
  function renderTableRows() {
    return getRowData().map((row) => {
      if (selection) {
        row.selection = row.campaignId;
      }
      return (
        <tr>
          {__columns.map((column) =>
            renderRowCell(column.render(row[column.name], column.name))
          )}
        </tr>
      );
    });
  }

  return (
    <div>
      <div ref={Ref} className="table-wrapper">
        <table className="table" ref={tableElement}>
          <thead>{renderTableHeading()}</thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
      <div className="pagination_wrapper">
        <div className="pagination_wrapper-left">
          <b>{getSearchedData().length}</b> indirimden{" "}
          <b>
            {(currentPage - 1) * rowNumberPerPage + 1} -{" "}
            {currentPage * rowNumberPerPage}
          </b>{" "}
          arasını görüntülüyorsunuz.
        </div>
        <Pagination
          totalCount={getSearchedData().length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowNumberPerPage={rowNumberPerPage}
        />
      </div>
    </div>
  );
};

export default Table;
