import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import Pagination from "../components/Pagination";
import "../styles/pages/itemCardPage.scss";

const ItemCardPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowNumberPerPage = 48;

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "7e0275dfc2msh4386994d914b378p1ce090jsnb9672926ac36",
      },
    };
    axios
      .request(options)
      .then((response) => setProducts(response.data))
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  function getSlicedData() {
    const startIndex = currentPage * rowNumberPerPage - rowNumberPerPage;
    const endIndex = startIndex + rowNumberPerPage;
    return products.slice(startIndex, endIndex);
  }

  return (
    <div className="item-page">
      <div className="item-container">
        {getSlicedData().map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
      <div className="pagination_wrapper">
        <div className="pagination_wrapper-left">
          <b>{products.length}</b> oyundan{" "}
          <b>
            {(currentPage - 1) * rowNumberPerPage + 1} -{" "}
            {currentPage * rowNumberPerPage}
          </b>{" "}
          arasını görüntülüyorsunuz.
        </div>
        <Pagination
          totalCount={products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowNumberPerPage={rowNumberPerPage}
        />
      </div>
    </div>
  );
};

export default ItemCardPage;
