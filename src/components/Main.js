import React, { useEffect, useState } from 'react';
import { getData } from 'components/getData';

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(process.env.REACT_APP_PRODUCT_KEY).then((res) => {
      setData(res);
    });
  }, []);

  console.log(data);
  return <div></div>;
}
