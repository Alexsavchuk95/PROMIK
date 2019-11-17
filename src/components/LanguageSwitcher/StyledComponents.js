import styled from 'styled-components';

export const LanguageSwitcherWrap = styled.div`
  display: flex;
  margin: 30px 15px 0 15px;
  justify-content: ${props => (props.isOpenMenu ? 'initial' : 'center')};
`;

export const LangWrap = styled.div`
  display: flex;
  width: 26px;
  min-width: 26px;
  height: 26px;
  overflow: hidden;
  margin: ${props => (props.isOpenMenu ? '4px' : '4px 0')};
  cursor: pointer;
  border-radius: 50%;
  border: ${props => (props.isCurrent ? '2px solid #0EA0CE' : '2px solid transparent')};
  
  &:hover {
    border: 2px solid #0EA0CE;
  }
`;

export const Flag = styled.img`
  display: flex;
  width: 100%;
`;
