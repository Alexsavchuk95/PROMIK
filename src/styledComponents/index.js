// ----------StyledComponents----------

import styled from 'styled-components';
import colors from 'ColorsRoot';

const { primary } = colors;

export const Wrapper = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : '100%')};
  min-height: 100vh;
  font-family: "Avenir Next";
  font-weight: 300;
  position: relative;
  ${props => (props.contact && (
    'flex-direction: column;'
    + 'justify-content: center;'
    + 'align-items: center;'
  ))};
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Title = styled.h1`
  font-size: 88px;
  font-weight: 600;
  color: ${props => (props.color ? props.color : primary._text_color_blue)};
  margin: ${props => (props.margin ? props.margin : '0 0 20px')};
  
  @media screen and (max-width: 1200px) {
    font-size: 66px;
  }
  
  @media screen and (max-width: 940px) {
    font-size: 40px;
    margin: 50px auto 0px;
  }
  
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  line-height: 38px;
  color: ${primary._white};
  font-weight: 300;
  margin: 0;
  
  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 34px;
  }
  
  @media screen and (max-width: 940px) {
    font-size: 24px;
    margin: 0 auto;
  }

`;

export const Yellow = styled.span`
  color: ${primary._text_color_yellow};
`;

export const White = styled.span`
  color: ${primary._white};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 60%;
  min-height: 22px;
  font-size: 12px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin-top: 20px;
`;

export const Label = styled.div`
  display: ${props => (props.display ? props.display : 'initial')};
  color: ${props => (props.color ? props.color : 'initial')};
  cursor: ${props => (props.cursor ? props.cursor : 'initial')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 'initial')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 'initial')};
  font-size: ${props => (props.fontSize ? props.fontSize : 'initial')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'initial')};
`;
