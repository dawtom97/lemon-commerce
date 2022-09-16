import { ElementType, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    level:'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode;
    isThin?: boolean;
    isLarge?:boolean
  };

const THIN = css` font-weight: 200;`

export const Text = styled.h2<Props>`
  ${({isThin}) => isThin && THIN};
  font-size: ${({isLarge})=>isLarge ? "4rem" : "2rem"};
`

export const Heading = ({ level = 'h2', children, isThin, isLarge }:Props) => {
  const Heading = level as ElementType;
  return (
    <Text as={Heading} isThin={isThin} isLarge={isLarge}>
      {children}
    </Text>
  );
};