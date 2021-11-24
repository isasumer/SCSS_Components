import React, { useRef, useState } from "react";
import clearlarge from "../assets/inputsIcons/clear-text_2.png";
import closeIcon from "../assets/tableIcon/default.png";
import error from "../assets/inputsIcons/error.png";
import searchIcon from "../assets/inputsIcons/search.png";
import chevronLeft from "../assets/tableIcon/circle-back-copy.png";
import chevronRight from "../assets/tableIcon/circle-back-copy-2.png";
import Table from "../components/Table/Table";
import "../styles/pages/tablePage.scss";
import tabledata from "../assets/tabledata.json";
import Buttons from "../components/Buttons";
import Inputs from "../components/Inputs";
import Drawer from "../components/Drawer";
import classnames from "classnames";
import "../styles/components/Drawer.scss";
import MakeDiscount from "../components/MakeDiscount";
function getTableData() {
  const columns = [
    {
      name: "campaignId",
      caption: "Kampanya ID",
      dataType: "number",
      render: (value) => (
        <span className="table-content-campaignId">{value}</span>
      ),
    },
    {
      name: "discountName",
      caption: "İndirim adı",
      dataType: "string",
      render: (value) => <span>{value}</span>,
    },
    {
      name: "affectedListingCount",
      caption: "Etkilenen Liste Sayısı",
      dataType: "string",
      render: (value) => <span>{value ? value : "-"}</span>,
    },
    {
      name: "includedMerchants",
      caption: "Mağaza",
      dataType: "string", //array
      render: (value) => <span>{value[0]?.legalName}</span>,
    },
    {
      name: "includedSkus",
      caption: "Hedef",
      dataType: "string", //array
      render: (value) => <span>{value}</span>,
    },
    {
      name: "isPaused",
      caption: "Durum",
      dataType: "boolean",
      render: (value) => (
        <div className={`isPaused isPaused-${value ? "active" : "passive"}`}>
          {value ? "Aktif" : "Pasif"}
        </div>
      ),
    },
    {
      name: "startDate",
      caption: "Başlangıç Tarihi",
      dataType: "string",
      render: (value) => <span>{value}</span>,
    },
    {
      name: "endDate",
      caption: "Bitiş Tarihi",
      dataType: "string",
      render: (value) => <span>{value}</span>,
    },
  ];
  const dataSource = tabledata.discounts.map((row) =>
    columns.reduce(
      (result, column) => ({ ...result, [column.name]: row[column.name] }),
      {}
    )
  );

  return { columns, dataSource };
}

const TablePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchData, setSearchData] = useState("");
  const { columns, dataSource } = getTableData();
  const scrollRef = useRef(null);
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>İndirim Listesi</h2>
        <div className="table-header-right">
          <div className="header-input-container">
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
                  leftDanger: null,
                  tr: null,
                  placeholder: "İndirim adı, kampanya id veya mağaza",
                  size: "discount",
                  label: null,
                  bottomRightLabel: null,
                  bottomLeftLabel: null,
                },
              ]}
            />
          </div>
          <Buttons
            innerText={"İndirim Oluştur"}
            color={"primary"}
            size={"discount"}
            onClick={() => setIsOpen(!isOpen)}
            disabled={false}
          />
        </div>
      </div>
      <div className="table-sub-header">
        <div className="table-sub-header-left">Filtrele</div>
        <div className="table-sub-header-right">
          <div className="table-sub-header-right-text">Dışarı aktar</div>
          <div className="table-sub-header-right-img">
            <img
              src={chevronLeft}
              alt="chevronLeft"
              onClick={() => scroll(-200)}
            />
            <img
              src={chevronRight}
              alt="chevronRight"
              onClick={() => scroll(+200)}
            />
          </div>
        </div>
      </div>
      <div className="table_wrapper">
        <Table
          Ref={scrollRef}
          columns={columns}
          dataSource={dataSource}
          selection={true}
          searchData={searchData}
        />
      </div>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position={"right"}
        size={"large"}
      >
        <div className="drawer-content">
          <div className="drawer-content-header">
            <div className="drawer-close" onClick={() => setIsOpen(false)}>
              <img src={closeIcon} alt="closeIcon" />
            </div>
            <h2>İndirim oluştur</h2>
          </div>
          <MakeDiscount />
          <div className={classnames("drawer-footer", "default")}>
            <Buttons innerText={"Primary"} color={"primary"} size={"default"} />
            <Buttons innerText={"Vazgeç"} color={"ghost"} size={"default"} />
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default TablePage;
