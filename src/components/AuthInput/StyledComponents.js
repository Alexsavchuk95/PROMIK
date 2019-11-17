import styled from 'styled-components';
import colors from 'ColorsRoot';

const { primary } = colors;

export const InputWrap = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const Input = styled.input`
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    border-top: 1px solid ${props => props.borderColor};
    border-right: 1px solid ${props => props.borderColor};
    border-bottom: 1px solid ${props => props.borderColor};
    border-left: 1px solid ${props => (props.borderLeft ? props.borderColor : 'transparent')};
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    width: 100%;
    height: 100%;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: ${props => (props.borderLeft ? '4px' : 'none')};
    border-bottom-left-radius: ${props => (props.borderLeft ? '4px' : 'none')};
    font-family: "Avenir Next";
    font-size: 19px;
    padding-left: 87px;
    ::placeholder {
        color: ${props => (props.borderLeft ? props.borderColor : primary._white)};
        font-size: 14px;
    }
    
    &:focus {
      outline: none;
    }
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
    margin-top: 6px;
`;
