import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(`err: ${err}`));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  // console.log(product);

  return (
    <div className="product-detail-container">
      {Object.keys(product).length === 0 ? (
        <div className="text-center">...Loading</div>
      ) : (
        <div className=" flex mt-9 gap-6">
          <div className="img-wrap w-6/12 grid place-items-end pr-16">
            <img src={image} alt={title} className="w-7/12" />
          </div>
          <div className="description-product w-5/12">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="price bg-green-500 inline-block rounded-md my-4">
              <h2 className="py-2 px-4 text-white text-xl font-bold">
                $ {price}
              </h2>
            </div>
            <h4>
              <strong>Category:</strong> {category}
            </h4>
            <p className="mb-7 mt-2 text-lg">{description}</p>
            <button className="py-4 px-5 bg-green-600 text-white text-2xl rounded-md hover:bg-green-700">
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
