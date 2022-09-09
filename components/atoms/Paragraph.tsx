import styled, { css } from "styled-components";

interface Props {
  isSmall?: boolean;
  isThin?: boolean;
  isBold?: boolean;
  isLarge?: boolean;
  isCustomSize?: string;
}

const SMALL = css`
  font-size: 14px;
`;
const LARGE = css`
  font-size: 34px;
  margin:5px 0;
`;
const THIN = css`
  font-weight: 300;
`;
const BOLD = css`
  font-weight: 600;
`;

export const Paragraph = styled.p<Props>`
  font-size: ${({isCustomSize}) => isCustomSize ? `${isCustomSize}rem` : '1.6rem'};
  color:#fff;
  ${({ isSmall }) => isSmall && SMALL}
  ${({ isLarge }) => isLarge && LARGE}
  ${({ isThin }) => isThin && THIN}
  ${({ isBold }) => isBold && BOLD}

`;
