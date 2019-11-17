// ----------StyledComponents----------

import styled from 'styled-components';
import colors from 'ColorsRoot';

const { primary } = colors;

export const Wrapper = styled.div`
    height: 100px;
    border-top: 0px solid ${primary._header_line};
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 0 30px;
    
    @media screen and (max-width: 768px) {
      height: 74px;
      margin: 11px 0px 0px 6px;
      position: static;
      padding:0;
    }
  `;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
  max-width: 30%;
  z-index: 1;
`;

export const AppsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 40%;
  
  @media screen and (max-width: 768px) {
    width: 120px;
    justify-content: space-between;
    margin-right: 25px;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 90%;

  @media screen and (max-width: 768px) {
    max-width: 74px;
    max-height: 74px;
  }
`;

export const AppImage = styled.img`
  width: 180px;
  margin-left: 10px;
  
  @media screen and (max-width: 768px) {
    margin-left: 5px;
    max-width: 34px;
    max-height: 37px;
  }
`;
