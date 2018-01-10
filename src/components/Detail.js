import React from "react";

const style = {
  wrapper: {
    margin: "40px"
  }
};

const Detail = ({ item }) => {
  if (!item) {
    return <div>Loading ...</div>;
  }

  return (
    <div style={style.wrapper}>
      Detailed info
      <p>
        <strong>Name:</strong> {item.name}
      </p>
      <p>
        <strong>ID:</strong> {item.id}
      </p>
    </div>
  );
};

export default Detail;
