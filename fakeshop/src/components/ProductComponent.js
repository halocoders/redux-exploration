import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <Link to={`/product/${id}`} key={id}>
        <div className="card">
          <div className="image grid place-items-center h-80">
            <img src={image} alt={title} className="w-6/12" />
          </div>
          <div className="content py-3 px-5 border-t-2 border-gray-300">
            <div className="header">{title}</div>
            <div className="price font-bold">$ {price}</div>
            <div className="category">{category}</div>
          </div>
        </div>
      </Link>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
