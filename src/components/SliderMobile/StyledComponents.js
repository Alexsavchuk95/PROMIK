// ----------StyledComponents----------

import styled, { keyframes } from 'styled-components';

const quickScaleDown = keyframes`
0% {
    transform:translateY(0px);
    opacity:1;
}
100% {
    transform:translateY(1000px);
    opacity:0;
}
}`;

export const Container = styled.div`
margin: 0 auto;
text-align: center;
overflow:hidden;
`;

export const BtnContainer = styled.div`
position: absolute;
left: 174px;
bottom: 38px;
`;

export const Content = styled.div`
`;

export const WrapperMobile = styled.div`
overflow:hidden;
animation: ${quickScaleDown} 5s infinite ease-out 2s;
`;
