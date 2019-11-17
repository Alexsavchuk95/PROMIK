import styled from 'styled-components';

const Left = styled.div`
  flex: 0.45;
  position: relative;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 0.65;
  padding-right: 40px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 100%;
  position: absolute;
  right: -60px;
`;

const InfoWrapper = styled.div`
  max-width: 800px;
  
  @media screen and (max-width: 1200px) {
    max-width: 600px;
  }
`;

export {
  Left,
  Right,
  ImageWrapper,
  InfoWrapper,
};
