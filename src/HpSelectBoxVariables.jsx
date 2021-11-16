import React, { useState } from "react";
// import HpButton from "../components/HpButton/HpButton";
import HpSelectBox from "./HpSelectBox";

function HpSelectBoxVariables() {
  const data = [
    {
      id: 1,
      value: "Aksiyon Kameraları",
      text: "Akıllı Ev & Yaşam > Eğlence > Aksiyon Kameraları [80079062]",
    },
    {
      id: 2,
      value: "Akıllı Oyuncaklar",
      text: "Akıllı Ev & Yaşam > Eğlence > Akıllı Oyuncaklar [80079064]",
    },
    {
      id: 3,
      value: "Drone",
      text: "Akıllı Ev & Yaşam > Eğlence > Drone [80079061]",
    },
    {
      id: 4,
      value: "Medya Oynatıcılar",
      text: "Akıllı Ev & Yaşam > Eğlence > Medya Oynatıcılar [80079060]",
    },
    {
      id: 5,
      value: "Hoverboard",
      text: "Akıllı Ev & Yaşam > Eğlence > Hoverboard [80079063]",
    },
    {
      id: 6,
      value: "Smart TV",
      text: "Akıllı Ev & Yaşam > Eğlence > Smart TV [80079058]",
    },
  ];

  const data2 = [
    {
      id: 1,
      value: "Acedistore",
      text: "Acedistore",
    },
    {
      id: 2,
      value: "Ada İç Giyim",
      text: "Ada İç Giyim",
    },
    {
      id: 3,
      value: "Adem Koç Plastik",
      text: "Adem Koç Plastik",
    },
    {
      id: 4,
      value: "Afacan Ticaret",
      text: "Afacan Ticaret",
    },
    {
      id: 5,
      value: "Ağaç Ustası",
      text: "Ağaç Ustası",
    },
    {
      id: 6,
      value: "Altuğ Ticaret",
      text: "Altuğ Ticaret",
    },
  ];
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);

  const handleSubmit = (e) => {
    alert(`Kategori : ${selectedValues}\n Mağaza : ${selectedValues2}`);
    e.preventDefault();
  };

  return (
    <div style={{ padding: "10px" }}>
      <form action="POST" onSubmit={handleSubmit}>
        <div>
          <HpSelectBox
            label="Kategori"
            placeholder="Kategori seçin"
            data={data}
            setSelectedValues={setSelectedValues}
            multipleSelect
          />
        </div>
        <div>
          <HpSelectBox
            label="Seçili mağazalar"
            placeholder="Mağaza seçin"
            data={data2}
            setSelectedValues={setSelectedValues2}
            multipleSelect
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HpSelectBoxVariables;
