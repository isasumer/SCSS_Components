import React from "react";
import "../styles/components/Pagination.scss";

const Pagination = ({ currentPage, setCurrentPage, totalCount }) => {
  const dataLimit = 8; //her sayfada x veri
  const pageLimit = Math.round(totalCount / dataLimit); //altta gösterilecek sayfa sayısı

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
    <div className="pagination-container">
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${
            currentPage >= Math.round(totalCount ? "disabled" : "")
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
