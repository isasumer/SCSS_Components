import React from "react";
import Segment from "../components/segment/Segmentt";
import segmentData from "../components/segment/SegmentData";

const SegmentPage = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>Default:</div>
        {segmentData
          .filter((item) => item.type === "segment")
          .map((item, id) => (
            <div key={id} style={{ margin: "10px" }}>
              <Segment {...item} />
            </div>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>Fluid:</div>
        {segmentData
          .filter((item) => item.type !== "segment")
          .map((item, id) => (
            <div key={id} style={{ margin: "10px" }}>
              <Segment {...item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default SegmentPage;
