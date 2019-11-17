import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen6Img from 'AssetsRoot/img/screen6.png';
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

const StepSix = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen6Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepSix.receiveMoney')}
          <Yellow>{I18n.t('stepSix.atOnce')}</Yellow>
        </Title>
        <Subtitle>{I18n.t('stepSix.weProvide')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepSix;
