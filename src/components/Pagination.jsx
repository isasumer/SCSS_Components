import React from "react";
import "../styles/components/Pagination.scss";
import chevronLeftActive from "../assets/tableIcon/chevron-left@2x.png";
import chevronLeftDisable from "../assets/tableIcon/chevron-left_2@3x.png";
import chevronRightActive from "../assets/tableIcon/chevron-right.png";
import chevronRightDisable from "../assets/tableIcon/chevron-right@3x.png";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalCount,
  rowNumberPerPage,
}) => {
  const pageLimit = Math.round(totalCount / rowNumberPerPage); //altta gösterilecek sayfa sayısı

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="pagination">
      <img
        src={currentPage === 1 ? chevronLeftActive : chevronLeftDisable}
        alt={chevronLeftDisable}
        onClick={goToPreviousPage}
        className={` ${currentPage === 1 ? "disabled" : ""}`}
      />

      {getPaginationGroup().map((item, index) => (
        <p
          key={index}
          onClick={changePage}
          className={`pagination-item ${
            currentPage === item ? "active" : null
          }`}
        >
          {item}
        </p>
      ))}
      <img
        src={
          currentPage === pageLimit ? chevronRightActive : chevronRightDisable
        }
        alt={chevronRightDisable}
        onClick={goToNextPage}
        className={`${currentPage === pageLimit ? "disabled" : ""}`}
      />
    </div>
  );
};

export default Pagination;
