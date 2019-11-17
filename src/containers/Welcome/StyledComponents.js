import styled from 'styled-components';

const Left = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 18vh;
  padding-right: 6%;
  z-index: 1;
`;

const Right = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
  padding-bottom: 20vh;
  padding-left: 6%;
`;

const PhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0 auto;
`;

export {
  Left,
  Right,
  PhoneWrapper,
};
