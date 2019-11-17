import React from 'react';
import Screen1Img from 'AssetsRoot/img/screen1.png';
import { Wrapper, Image } from 'StyledComponentsRoot';

import PhoneWrapper from '../../Welcome';

const StepOne = () => (
  <Wrapper>
    <PhoneWrapper>
      <Image src={Screen1Img} alt="phone" />
    </PhoneWrapper>
  </Wrapper>
);

export default StepOne;
