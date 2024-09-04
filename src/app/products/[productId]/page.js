import React from "react";

const DynamicProductPage = ({ params, searchParams }) => {
  return (
    <div>
      <h2>Dynamic Product Page {params.productId}</h2>
    </div>
  );
};

export default DynamicProductPage;
