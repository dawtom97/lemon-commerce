import React from 'react';
import { Paragraph } from '../../atoms/Paragraph';
import * as Styled from './styles';


const AuthBanner = () => {
  return (
    <Styled.Wrapper>
        <Styled.Box>
            <div>
                <Paragraph isBold>We are</Paragraph>
            </div>
        </Styled.Box>
    </Styled.Wrapper>
  )
}

export default AuthBanner