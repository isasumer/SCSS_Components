import React, { useState } from "react";
import clearlarge from "../assets/inputsIcons/clear-text_2.png";
import error from "../assets/inputsIcons/error.png";
import searchIcon from "../assets/inputsIcons/search.png";
import chevronLeft from "../assets/tableIcon/circle-back-copy.png";
import chevronRight from "../assets/tableIcon/circle-back-copy-2.png";
import Table from "../components/Table/Table";
import "../styles/pages/tablePage.scss";
import tabledata from "../assets/tabledata.json";
// import columns from "../components/Table/ColumnsData";
import Buttons from "../components/Buttons";
import Inputs from "../components/Inputs";

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
      render: (value) => <span>{value}</span>,
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
      render: (value) => <span>{value ? "Aktif" : "Pasif"}</span>,
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
  const [filterdata, setFilterData] = useState("");
  console.log(tabledata);
  const { columns, dataSource } = getTableData();

  console.log(dataSource);
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>İndirim Listesi</h2>
        <div className="table-header-right">
          <div className="header-input-container">
            <Inputs
              setFilterData={setFilterData}
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
            disabled={false} ///cursor not allowed
          />
        </div>
      </div>
      <div className="table-sub-header">
        <div className="table-sub-header-left">Filtrele</div>
        <div className="table-sub-header-right">
          <div className="table-sub-header-right-text">Dışarı aktar</div>
          <div className="table-sub-header-right-img">
            <img src={chevronLeft} alt="chevronLeft" />
            <img src={chevronRight} alt="chevronRight" />
          </div>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} selection={true} />
    </div>
  );
};

export default TablePage;
