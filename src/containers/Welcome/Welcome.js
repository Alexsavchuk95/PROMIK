import React from 'react';
import Screen1Img from 'AssetsRoot/img/screen1.png';
import CarImg from 'AssetsRoot/img/L_car.png';
import GooImg from 'AssetsRoot/img/R_goo.png';
import { Wrapper, Image } from 'StyledComponentsRoot';
import {
  Left,
  Right,
  PhoneWrapper,
} from './StyledComponents';

const Welcome = () => (
  <Wrapper>
    <Left>
      <Image src={CarImg} alt="car" />
    </Left>
    <PhoneWrapper>
      <Image src={Screen1Img} alt="phone" />
    </PhoneWrapper>
    <Right>
      <Image src={GooImg} alt="goo" />
    </Right>
  </Wrapper>
);

export default Welcome;
