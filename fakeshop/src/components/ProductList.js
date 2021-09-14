import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

import ProductComponent from './ProductComponent';

const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(`err: ${err}`);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-list justify-center">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
