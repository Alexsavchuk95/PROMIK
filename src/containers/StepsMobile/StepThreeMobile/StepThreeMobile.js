import React, { Fragment } from 'react';
import { I18n } from 'react-redux-i18n';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow } from 'StyledComponentsRoot';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '285px',
};

const StepThreeMobile = () => (
  <Fragment>
    <Title>
      {I18n.t('stepThree.receive')}
      <Yellow>{I18n.t('stepThree.many')}</Yellow>
      <Yellow>{I18n.t('stepThree.orders')}</Yellow>
      {I18n.t('stepThree.withCargoo')}
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepThree.weProvide')}
    </Subtitle>
  </Fragment>
);

export default StepThreeMobile;
