import React, { Fragment } from 'react';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow, White } from 'StyledComponentsRoot';
import { I18n } from 'react-redux-i18n';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '197px'
};

const title = {
  maxWidth: '291px'
};
 
const StepTwoMobile = () => (
  <Fragment>
    <Title style={title}>
      {I18n.t('stepTwo.present')}
      <Yellow>{I18n.t('stepTwo.car')}</Yellow>
      <White>{I18n.t('stepTwo.goo')}</White>
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepTwo.orderPlatform')}
    </Subtitle>
  </Fragment>
);

export default StepTwoMobile;
