import React, { Fragment } from 'react';
import { I18n } from 'react-redux-i18n';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow } from 'StyledComponentsRoot';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '334px'
};

const StepSevenMobile = () => (
  <Fragment>
    <Title>
      {I18n.t('stepSeven.allOrders')}
      <Yellow>{I18n.t('stepSeven.real')}</Yellow>
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepSeven.weProvide')}
    </Subtitle>
  </Fragment>
);

export default StepSevenMobile;
