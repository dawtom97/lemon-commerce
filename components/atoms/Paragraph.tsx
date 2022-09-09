import styled, { css } from "styled-components";

interface Props {
  isSmall?: boolean;
  isThin?: boolean;
  isBold?: boolean;
  isLarge?: boolean;
}

const SMALL = css`
  font-size: 12px;
`;
const LARGE = css`
  font-size: 18px;
`;
const THIN = css`
  font-weight: 300;
`;
const BOLD = css`
  font-weight: 600;
`;

export const Paragraph = styled.p<Props>`
  font-size: 16px;
  color:#fff;
  ${({ isSmall }) => isSmall && SMALL}
  ${({ isLarge }) => isLarge && LARGE}
  ${({ isThin }) => isThin && THIN}
  ${({ isBold }) => isBold && BOLD}
`;
