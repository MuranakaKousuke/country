import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import {COLOR} from '../../constants';

import { Margin } from '../atoms/layouts'
import Img from '../atoms/Img';
import Text from '../atoms/Text';
import { VerticalCenterWrapper } from '../atoms/layouts';
import HeaderList from '../molecules/HeaderList';

const StyledHeader = styled.header`
  height: 50;
  display: flex;
`

const Header = () => {
  return (
    <StyledHeader>
      <Margin left='100px' right='auto'>
        <VerticalCenterWrapper>
          <Link href="/">
            <a>
              <Img width='50' height='50' src='/UN.png' />
            </a>
          </Link>
          <Text
            fontSize = '1rem'
            fontWeight = '600'
          >
            世界の国旗と国名と首都を覚えるアプリ
          </Text>
        </VerticalCenterWrapper>
      </Margin>

      <Margin right='100px'>
        <HeaderList
          href = '/signup'
          src = '/human.svg'
          text = '新規登録'
          backgroundColor = '#f0efe9'
        />

        <HeaderList
          href = '/edit'
          src = '/beginner.svg'
          text = '初めての方へ'
          color = {COLOR.WHITE}
          backgroundColor = '#62b684'
        />
      </Margin>
    </StyledHeader>
  );
}

export default Header;