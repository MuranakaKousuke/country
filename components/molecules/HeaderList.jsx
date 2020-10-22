import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import {COLOR} from '../../constants';

import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import UnderLineNone from '../atoms/UnderLineNone';
import { AlignWrapper } from '../atoms/layouts';

// -----------------------------------------------
//
// type Props = {
//   register: {register};
//   name: string;
//   type?: string;
//   placeholder: string;
//   validates?: {...function};
// }

// -----------------------------------------------
//
const StyledHeaderList = styled.div`
  display: inline-block;
  height: 50px;
  width: 100px;
  background-color: ${({backgroundColor}) => backgroundColor};
`

// -----------------------------------------------
//

const HeaderList = ({
  href,
  src,
  text,
  color = `${COLOR.BLACK}`,
  backgroundColor = `${COLOR.WHITE}`,
}) => {
  console.log(backgroundColor)
  return (
    <StyledHeaderList backgroundColor={backgroundColor}>
      <Link href={href}>
        <UnderLineNone style={{textDecoration: 'none'}}>
          <AlignWrapper textAlign='center'>
            <Icon
              width = '20'
              height = '20'
              src = {src}
            />
          </AlignWrapper>
          <AlignWrapper  textAlign='center'>
            <Text color={color}>{text}</Text>
          </AlignWrapper>
        </UnderLineNone>
      </Link>
    </StyledHeaderList>
  );
}

export default HeaderList;