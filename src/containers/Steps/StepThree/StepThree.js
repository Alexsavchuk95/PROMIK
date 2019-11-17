import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen3Img from 'AssetsRoot/img/screen3.png';
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

const StepThree = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen3Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepThree.receive')}
          <Yellow>{I18n.t('stepThree.many')}</Yellow>
          <Yellow>{I18n.t('stepThree.orders')}</Yellow>
          {I18n.t('stepThree.withCargoo')}
        </Title>
        <Subtitle>{I18n.t('stepThree.weProvide')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepThree;
