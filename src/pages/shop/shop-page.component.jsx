import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import "./shop-page.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
