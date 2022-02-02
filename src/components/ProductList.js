import React, { useEffect, useState } from 'react';
import { getData } from 'utils/functions/getData';

import 'utils/styles/ProductList.scss';

function ProductList() {
  const [productImg, setProductImg] = useState([]);

  useEffect(() => {
    getData(process.env.REACT_APP_PRODUCT_KEY).then((res) => {
      setProductImg(res.productList);
    });
  }, []);

  console.log(productImg);

  return (
    <div className='product-img-wrapper'>
      {productImg.map((product, idx) => {
        return (
          <div key={product.productName} style={{ backgroundImage: `url(${product.imageUrl})` }} className='productImg'>
            {product.outside === false ? (
              <div className='badge' key={product.productId}>
                {product.discountRate}
                <span>%</span>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
