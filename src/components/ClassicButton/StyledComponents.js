import styled from 'styled-components';

export const Button = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  cursor: pointer;
  border: ${props => (props.borderColor ? `1px solid ${props.borderColor}` : 'none')};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: ${props => props.borderRadius};
  font-size: 14px;
  font-family: "Avenir Next";
  display: flex;
  justify-content: center;
  padding: 0;
  &:active {
    background-color: ${props => props.bgColorPressed} !important;
    color: #ffffff !important;
  }
  
  :hover {
    color: ${props => props.colorHover};
    background-color: ${props => props.bgColorHover};
    border: ${props => (props.borderColor ? `1px solid ${props.borderColorHover}` : 'none')};
  }
  :hover:disabled {
    color: ${props => props.colorDisabled};
    background-color: ${props => props.bgColorDisabled};
    border: ${props => (props.borderColor ? `1px solid ${props.colorDisabled}` : 'none')};
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
  }
`;
