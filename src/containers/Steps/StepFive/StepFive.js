import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen5Img from 'AssetsRoot/img/screen5.png';
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

const StepFive = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen5Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepFive.earnFrom')}
          <Yellow>{I18n.t('stepFive.thousands')}</Yellow>
          {I18n.t('stepFive.perMonth')}
        </Title>
        <Subtitle>{I18n.t('stepFive.weProvide')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepFive;
