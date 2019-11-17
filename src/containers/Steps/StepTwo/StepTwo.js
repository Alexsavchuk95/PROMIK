import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen2Img from 'AssetsRoot/img/screen2.png';
import {
  Wrapper,
  Title,
  Subtitle,
  Image,
  White,
  Yellow,
} from 'StyledComponentsRoot';
import {
  Left,
  Right,
  ImageWrapper,
  InfoWrapper,
} from '../StyledComponents';

const StepTwo = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen2Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepTwo.present')}
          <Yellow>{I18n.t('stepTwo.car')}</Yellow>
          <White>{I18n.t('stepTwo.goo')}</White>
        </Title>
        <Subtitle>{I18n.t('stepTwo.orderPlatform')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepTwo;
