import React from 'react';
import Icon from '../components/atoms/Icon'

const IconList = () => {
  return (
    <>
      <Icon
        width = {20}
        height = {20}
        src = '/pen.svg'
        alt = 'ペン'
      />
      <Icon
        width = {40}
        height = {40}
        src = '/trash.svg'
        alt = 'ゴミ箱'
      />
      <Icon
        width = {40}
        height = {40}
        alt = 'alt'
      />
    </>
  );
}

export default IconList;