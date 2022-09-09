import styled, { css } from "styled-components";

interface Props {
    design: "primary" | "secondary" | "transparent"
    color?: "light" | "dark"
}

const DESIGN = {
    primary: css`    
        background-color: gold;
    `,
    secondary:css`
        background-color: green;
    `,
    transparent:css`
        background-color: transparent;
        border: none;
        color: #fff;
    `

}

export const Button = styled.button<Props>`
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    margin:10px 0;
    ${({design})=> design && DESIGN[design]};
    
`