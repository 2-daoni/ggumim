import React, { useEffect, useState } from 'react';
import { getData } from 'utils/functions/getData';

import 'utils/styles/Main.scss';
import Btn from './Btn';
import ProductList from './ProductList';

export default function Main() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [click, setClick] = useState(true);
  const [outside, setOutside] = useState([]);

  const onClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    getData(process.env.REACT_APP_PRODUCT_KEY).then((res) => {
      setData(res);
      setProduct(res.productList);
      setOutside(res.productList.outside);
    });
  }, []);

  console.log(data);
  console.log(product);
  console.log(click);
  console.log(outside);

  return (
    <div>
      <header>
        <img src='images/logo.png' className='logo' alt='logo'></img>
      </header>
      <div className='head'>
        <h2>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내방</h2>
      </div>
      <div className='img-wrapper'>
        <img src={data.imageUrl} className='mainImg' alt='mainImg'></img>
        {product &&
          product.map((idx) => {
            return (
              <div className='tag' style={{ top: `${idx.pointX + 300}px`, left: `${idx.pointY + 100}px` }} key={idx.productName}>
                <Btn key={idx.productId} />
                <div className={click ? 'tag-info close' : 'tag-info click'} onClick={onClick}>
                  <img src={idx.imageUrl} key={idx.productId} className='tag-info-image' alt='tag-info-image'></img>
                  <div className='tag-info-text'>
                    <div className='tag-info-name'>{idx.productName}</div>
                    <div className='tag-info-priceInfo'>
                      {idx.outside ? <div className='expected-price'>정상가</div> : <div className='price-discount'>{idx.discountRate}%</div>}
                      <div className='tag-info-price'>{idx.priceOriginal.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className='move-icon-wrapper'>
                    <img src='	https://cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png' width='20' height='20' alt='move-icon'></img>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className='productList-wrapper'>
        <ProductList />
      </div>
    </div>
  );
}
