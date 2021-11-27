import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import "../styles/pages/itemCardPage.scss";
import Buttons from "../components/Buttons";
import chevronLeft from "../assets/tableIcon/chevron-left.png";
import chevronRight from "../assets/tableIcon/chevron-right_2.png";

const CurrentNewsPage = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowNumberPerPage = 48;
  const API_KEY = "3DAWFBckEGzznIHGSNJ6BGoQWWfH9mPlimDkSYKIBmEM9OPq";
  var baseUrl =
    `https://api.currentsapi.services/v1/latest-news?` +
    `&apiKey=${API_KEY}` +
    `&page_number=${currentPage}` +
    `&page_size=${rowNumberPerPage}`;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNews(response.data.news);
    });
  }, [currentPage, baseUrl]);

  return (
    <div className="itemPage">
      <div className="header-container">
        <h1>Current Api News</h1>
      </div>
      <div className="item-container">
        {news.map((item) => (
          <ItemCard
            id={item.id}
            description={item.description}
            image={item.image}
            title={item.title}
            date={item.published.slice(0, 10)}
            url={item.url}
            author={item.author}
            btn_inner_text="View News"
          />
        ))}
      </div>
      <div className="current-news-btn-container">
        <Buttons
          onClick={() => setCurrentPage(currentPage - 1)}
          innerText={"Prev"}
          color={"success"}
          size={"default"}
          disabled={currentPage === 1 ? true : false} ///cursor not allowed
          leftIcon={chevronLeft}
        />
        <Buttons
          onClick={() => setCurrentPage(currentPage + 1)}
          innerText={"Next"}
          color={"success"}
          size={"default"}
          disabled={false} ///cursor not allowed
          rightIcon={chevronRight}
        />
      </div>
    </div>
  );
};

export default CurrentNewsPage;
