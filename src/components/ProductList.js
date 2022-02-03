import React, { useEffect, useState } from 'react';
import { getData } from 'utils/functions/getData';

import 'utils/styles/ProductList.scss';

function ProductList() {
  const [productImg, setProductImg] = useState([]);
  const [on, setOn] = useState(false);

  const onClick = () => {
    setOn(!on);
  };

  useEffect(() => {
    getData(process.env.REACT_APP_PRODUCT_KEY).then((res) => {
      setProductImg(res.productList);
    });
  }, []);

  console.log(productImg);

  return (
    <div className='productImg-wrapper'>
      <div className='productImg-container'>
        {productImg.map((product, idx) => {
          return (
            <div key={product.productName} style={{ backgroundImage: `url(${product.imageUrl})` }} className={on ? 'productImg on' : 'productImg off'} onClick={onClick}>
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
    </div>
  );
}

export default ProductList;
