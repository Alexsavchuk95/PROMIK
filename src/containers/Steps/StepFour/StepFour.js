import React from 'react';
import { I18n } from 'react-redux-i18n';
import Screen4Img from 'AssetsRoot/img/screen4.png';
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

const StepFour = () => (
  <Wrapper>
    <Left>
      <ImageWrapper>
        <Image src={Screen4Img} alt="phone" />
      </ImageWrapper>
    </Left>
    <Right>
      <InfoWrapper>
        <Title>
          {I18n.t('stepFour.newOrderEvery')}
          <Yellow>{I18n.t('stepFour.twoMinutes')}</Yellow>
        </Title>
        <Subtitle>{I18n.t('stepFour.weProvide')}</Subtitle>
      </InfoWrapper>
    </Right>
  </Wrapper>
);

export default StepFour;
