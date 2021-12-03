import { useEffect, useState } from "react";
import Accordion from "../Accordion.jsx";
import Inputs from "../Inputs";
import icon from "../../assets/Solution Center/icon.png";
import clearlarge from "../../assets/inputsIcons/clear-text_2.png";
import error from "../../assets/inputsIcons/error.png";
import searchIcon from "../../assets/inputsIcons/search.png";
import axios from "axios";
import SSSIcon from "../../assets/Solution Center/5@2x.png";
import "../../styles/components/SolutionCenterSSS.scss";

const answer =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa incidunt veniam laboriosam itaque! Repudiandae dolorum suscipit animi illum enim dolores?";

const SolutionCenterSSS = () => {
  const categorydataURL =
    "https://api-cozummerkezi.hepsiburada.com/faqcategories/parentcategories/helppage";
  const dataURL = "https://api-cozummerkezi.hepsiburada.com/faqs/directory";
  const [categorydata, setCategoryData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(18);
  const [searchData, setSearchData] = useState("");
  const [clicked, setClicked] = useState("0");
  const [isSelected, setIsSelected] = useState(false);
  const [scrollViewId, setScrollViewId] = useState();

  useEffect(() => {
    axios.get(categorydataURL).then((res) => setCategoryData(res?.data));
    axios.get(dataURL).then((res) => setData(res?.data));
  }, []);

  useEffect(() => {
    setScrollViewId(scrollViewId);
    const element = document.getElementById(`${scrollViewId}`);
    element?.scrollIntoView({ behavior: "smooth" });

    const changeRemove = document.getElementsByClassName("makeFocus")[0];
    changeRemove?.classList.remove("makeFocus");
    const change = document.getElementById(`category-${scrollViewId}`);

    change?.classList.toggle("makeFocus");
  }, [scrollViewId]);

  const onToggle = (e, id) => {
    setSearchData("");
    const selectedId = data.filter(
      (element) => element.parentCategoryId === id
    )[0]?.categories[0].categoryId;

    setScrollViewId(selectedId);
    setSelectedCategory(id);

    const selectedCategoryMakeVisible = (id) => {
      const deactiveCategory = document.querySelectorAll(
        ".sss-wrapper-left-ul-subcategory-item"
      );
      deactiveCategory.forEach((el) => el.classList.remove("active"));
      const selectedCategory = data
        .filter((element) => element.parentCategoryId === id)[0]
        ?.categories.map((el) => el.categoryId);

      return selectedCategory.forEach((item) => {
        const makeVisible = document.getElementById(`category-${item}`);
        makeVisible?.classList.toggle("active");
      });
    };

    selectedCategoryMakeVisible(id);
  };
  const handleToggle = (id) => {
    if (clicked === id) {
      return setClicked("0");
    }
    setClicked(id);
  };

  function getSearchedData() {
    if (searchData) {
      return data.filter((item) =>
        JSON.stringify(item.categories.map((el) => el.faqs))
          .toLowerCase()
          ?.includes(searchData.toLowerCase())
      );
    }
    return data;
  }

  return (
    <div className="sss-container">
      <div className="sss-header">Merak Edilenler</div>
      <div className="sss-wrapper">
        <div className="sss-wrapper-left">
          <ul className="sss-wrapper-left-ul">
            <li className="sss-wrapper-left-ul-category">
              <img src={SSSIcon} alt={SSSIcon} />
              <p>Sıkça sorulan sorular</p>
            </li>
            {categorydata.map((item) => (
              <div>
                <li
                  id={`${item.id}`}
                  className="sss-wrapper-left-ul-category"
                  key={item.id}
                  onClick={(e) => onToggle(e, item.id)}
                >
                  <img
                    src={selectedCategory === item.id ? icon : item.iconUrl}
                    alt={item.helpPaageName}
                  />
                  <p
                    style={
                      selectedCategory === item.id
                        ? { color: "rgb(255, 96, 0)" }
                        : {}
                    }
                  >
                    {item.helpPageName}
                  </p>
                </li>
                <div className="sss-wrapper-left-ul-subcategory">
                  <div className="sss-wrapper-left-ul-subcategory-line" />
                  <div className="sss-wrapper-left-ul-subcategory-li">
                    {getSearchedData()
                      .filter(
                        (element) => element.parentCategoryId === item.id
                      )[0]
                      ?.categories.map((el) => (
                        <li
                          id={`category-${el.categoryId}`}
                          onClick={() => setScrollViewId(el.categoryId)}
                          key={el.categoryId}
                          className="sss-wrapper-left-ul-subcategory-item"
                        >
                          <span>{el.categoryName}</span>
                        </li>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="sss-wrapper-right">
          <div className="sss-wrapper-right-input">
            <Inputs
              setSearchData={setSearchData}
              data={[
                {
                  id: 1,
                  disabled: false,
                  type: "default-input",
                  cleartext: clearlarge,
                  error: error,
                  leftIcon: searchIcon,
                  leftDanger: searchIcon,
                  tr: null,
                  placeholder: "Merak edilenler içinde ara",
                  size: "solution-center",
                  label: null,
                  bottomRightLabel: null,
                  bottomLeftLabel: null,
                },
              ]}
            />
          </div>
          {searchData ? (
            <div className="sss-wrapper-right-faq">
              {getSearchedData().map((element) =>
                element.categories
                  .filter((item) =>
                    JSON.stringify(item)
                      .toLowerCase()
                      ?.includes(searchData.toLowerCase())
                  )
                  .map((el) => (
                    <div>
                      <h3
                        id={`${el.categoryId}`}
                        className="sss-wrapper-right-faq-name"
                      >
                        {el.categoryName}
                      </h3>
                      <ul className="sss-wrapper-right-faq-accordion">
                        {el.faqs
                          .filter((item) =>
                            JSON.stringify(item)
                              .toLowerCase()
                              ?.includes(searchData.toLowerCase())
                          )
                          .map((faq, index) => (
                            <Accordion
                              onToggle={() => handleToggle(faq.id)}
                              active={clicked === faq.id}
                              key={index}
                              faq={faq.name}
                              answer={answer}
                            />
                          ))}
                      </ul>
                    </div>
                  ))
              )}
            </div>
          ) : (
            <div className="sss-wrapper-right-faq">
              {getSearchedData()
                .filter(
                  (element) => element.parentCategoryId === selectedCategory
                )[0]
                ?.categories.map((el) => (
                  <div>
                    <h3
                      id={`${el.categoryId}`}
                      className="sss-wrapper-right-faq-name"
                    >
                      {el.categoryName}
                    </h3>
                    <ul className="sss-wrapper-right-faq-accordion">
                      {el.faqs.map((faq, index) => (
                        <Accordion
                          onToggle={() => handleToggle(faq.id)}
                          active={clicked === faq.id}
                          key={index}
                          faq={faq.name}
                          answer={answer}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionCenterSSS;
