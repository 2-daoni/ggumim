import React, { useState } from 'react';
import 'utils/styles/Btn.scss';

function Btn() {
  const [click, setClick] = useState(true);

  const onClick = () => {
    setClick(!click);
  };

  console.log(click);

  return (
    <div className='Btn-wrapper'>
      <img src='https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png' className={click ? 'Btn click' : 'Btn close'} onClick={onClick}></img>
      <img src='https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png' className={click ? 'Btn close' : 'Btn click'} onClick={onClick}></img>
    </div>
  );
}

export default Btn;
