import React, { Fragment } from 'react';
import { I18n } from 'react-redux-i18n';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow } from 'StyledComponentsRoot';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '246px'
};

const StepEightMobile = () => (
  <Fragment>
    <Title>
      <Yellow>{I18n.t('stepEight.intuitive')}</Yellow>
      {I18n.t('stepEight.design')}
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepEight.weProvide')}
    </Subtitle>
  </Fragment>
);

export default StepEightMobile;
