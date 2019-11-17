import styled from 'styled-components';

export const Button = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-top: 1px solid ${props => props.borderColor};
  border-right: 1px solid ${props => props.borderColor};
  border-bottom: 1px solid ${props => props.borderColor};
  border-left: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  margin-top: 20px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  
  &:active {
    background-color: ${props => props.bgColorPressed} !important;
    color: #ffffff !important;
  }
  
  :hover {
    color: ${props => props.colorHover};
    background-color: ${props => props.bgColorHover};
  }
  :hover:disabled {
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
  }
  
  &:focus {
    outline: none;
  }
`;
