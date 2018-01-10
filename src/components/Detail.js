import React from "react";

const Detail = ({ item }) => {
  if (!item) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
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
