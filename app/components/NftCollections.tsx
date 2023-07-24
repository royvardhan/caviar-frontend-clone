import React from "react";

const NftCollections = () => {
  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const generateRandomDataArray = () => {
    const dataArray = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 6; j++) {
        row.push(generateRandomString());
      }
      dataArray.push(row);
    }
    return dataArray;
  };

  const randomData = generateRandomDataArray();
  const headingData = [
    "Name",
    "Bid price",
    "Ask price",
    "Total volume",
    "Offer TVL",
    "Total trades",
  ];
  return (
    <main
      style={{
        margin: "100px",
      }}
    >
      <div>Nft Collections</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "repeat(10, 1fr)",
          gap: "4px",
          marginTop: "20px",
          fontWeight: "bold",
          border: "1px solid black",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        {headingData.map((heading, index) => {
          return (
            <div
              key={index}
              style={{
                padding: "8px",
                marginBottom: "4px",
                borderBottom: "1px solid black",
              }}
            >
              {heading}
            </div>
          );
        })}
        {randomData.map((row, index) => {
          const isLastRow = index === randomData.length - 1;
          return (
            <React.Fragment key={index}>
              {row.map((cell, cellIndex) => {
                return (
                  <div
                    key={cellIndex}
                    style={{
                      backgroundColor: "white",
                      padding: "8px",
                      fontWeight: "normal",
                      borderBottom: isLastRow ? "none" : "1px solid black",
                    }}
                  >
                    {cell}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
      <button
        style={{
          width: "100%",
          padding: "20px",
          border: "0",
          marginTop: "20px",
          backgroundColor: "#0A77C0",
          color: "white",
          borderRadius: "10px",
        }}
      >
        Load More
      </button>
    </main>
  );
};

export default NftCollections;
