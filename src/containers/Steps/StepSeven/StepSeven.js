import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen7Img from 'AssetsRoot/img/screen7.png';
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

const StepSeven = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen7Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepSeven.allOrders')}
          <Yellow>{I18n.t('stepSeven.real')}</Yellow>
        </Title>
        <Subtitle>{I18n.t('stepSeven.weProvide')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepSeven;
