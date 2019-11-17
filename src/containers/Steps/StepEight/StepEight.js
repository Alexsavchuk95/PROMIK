import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen8Img from 'AssetsRoot/img/screen8.png';
import {
  Wrapper,
  Title,
  Subtitle,
  Image,
  Yellow,
} from 'StyledComponentsRoot';
import {
  Left,
  Right,
  ImageWrapper,
  InfoWrapper,
} from '../StyledComponents';

const StepEight = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen8Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepEight.intuitive')}
          <Yellow>{I18n.t('stepEight.design')}</Yellow>
        </Title>
        <Subtitle>{I18n.t('stepEight.weProvide')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepEight;
