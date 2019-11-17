import styled from 'styled-components';
import colors from 'ColorsRoot';

const { primary, secondary } = colors;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: "Avenir Next";
`;

export const InputWrap = styled.div`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Input = styled.input`
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    border: ${props => (props.borderColor ? `1px solid ${props.borderColor}` : '1px solid transparent')};
    background-color: ${props => (props.disabled ? props.disabledBg : props.bgColor)};
    color: ${props => props.color};
    width: 100%;
    height: 100%;
    border-radius: 4px;
    font-size: 19px;
    ::placeholder {
        color: ${primary._normal};
        font-size: 14px;
    }
    
    &:focus {
      outline: none;
    }
`;

export const ErrorMessage = styled.div`
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    width: 100%;
    min-height: 22px;
    font-size: 12px;
    color: ${secondary._white};
    background-color: ${secondary._errorBg};
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    margin-top: 6px;
`;

export const IconCustom = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    svg {
      fill:  ${props => props.fill};
    }
    
    &:hover {
      svg {
        fill: ${props => props.fillHover};
      }
    }
`;
