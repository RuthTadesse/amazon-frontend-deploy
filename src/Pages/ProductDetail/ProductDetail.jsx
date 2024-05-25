import React, { useEffect, useState } from "react";

import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loder";
function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  //this is the same as result.jsx as it uses use param to get the id then fetch using axios that specific product and pass it as props for productcard to be displayed in fancy way and the loader is to show the user that the page is returning something as the user should wait and also shows optional rendering for the 
  // productdetail(individual product page) and results(when the category is clicked to list the products) and products(list all the categories by product card)



  //in this page we have flex and renderdesc which are passed as props to the product card and if the flex is true we assign another class to modify the css and renderdesc is to add desription
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;






