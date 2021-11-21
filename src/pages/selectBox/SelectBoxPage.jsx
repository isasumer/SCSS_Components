import React from "react";
import SelectBox from "../../components/SelectBox";
import categoryData from "./Data";

const SelectBoxPage = () => {
  let manipulatedData = []; //this data will be send as a prop to component
  let text = "";

  /*                                 */
  function repeater(item, text) {
    item.forEach((element) => {
      newCategoryData(element, text + " > " + element.name);
    });
  }

  function newCategoryData(data, text) {
    if (data.children) {
      repeater(data.children, text);
    } else {
      manipulatedData.push({
        key: data.id,
        value: data.name,
        text: `${text}[${data.id}]`.split("").slice(3).join(""),
        disabled: false,
        isSelected: false,
      });
    }
  }
  /*                                */
  repeater(categoryData, text);

  return (
    <div>
      <SelectBox
        label={"Kategori"}
        data={manipulatedData}
        placeholder={"Bir Kategori Seçin"}
      />
    </div>
  );
};

export default SelectBoxPage;
