import React from 'react';
import Img from '../components/atoms/Img'

const ImgList = () => {
  return (
    <>
      <Img
        width = {300}
        height = {300}
        src = '/cat.jpg'
        alt = 'ネコ'
      />
      <Img
        width = {200}
        height = {200}
        src = '/chinchila.jpg'
        alt = 'チンチラ'
      />
      <Img
        width = {300}
        height = {300}
        alt = 'alt'
      />
    </>
  );
}

export default ImgList;