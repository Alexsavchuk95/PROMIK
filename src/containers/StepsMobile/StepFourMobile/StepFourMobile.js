import React, { Fragment } from 'react';
import { I18n } from 'react-redux-i18n';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow } from 'StyledComponentsRoot';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '242px'
};

const title = {
  minWidth: '277px'
};

const StepFourMobile = () => (
  <Fragment>
    <Title style={title}>
      {I18n.t('stepFour.newOrderEvery')}
      <Yellow>{I18n.t('stepFour.twoMinutes')}</Yellow>
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepFour.weProvide')}
    </Subtitle>
  </Fragment>
);

export default StepFourMobile;
