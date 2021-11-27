import React, { useState } from "react";

const Sample = ({ onClick }) => {
  const [download, setDownload] = useState(true);

  return (
    <>
      {React.createElement(
        download ? "a" : "button",
        {
          ...(download
            ? { href: "www.google.com", download: "title" }
            : { onClick, type: "button" }),
        },
        <div>Hello</div>
      )}

      <button onClick={() => setDownload(!download)}>Toggle</button>
    </>
  );
};

export default Sample;

// import React, { useState } from "react";

// const Inner = () => {
//   return <div>Hello</div>;
// };
// const Sample = ({ onClick }) => {
//   const [download, setDownload] = useState(true);

//   return (
//     <>
//       {download ? (
//         <a download href="www.google.com">
//           <Inner />
//         </a>
//       ) : (
//         <button onClick={onClick}>
//           <Inner />
//         </button>
//       )}
//       <button onClick={() => setDownload(!download)}>Toggle</button>
//     </>
//   );
// };

// export default Sample;
