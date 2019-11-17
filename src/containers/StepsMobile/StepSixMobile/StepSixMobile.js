import React, { Fragment } from 'react';
import { I18n } from 'react-redux-i18n';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow } from 'StyledComponentsRoot';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '267px'
};

const StepSixMobile = () => (
  <Fragment>
    <Title>
      {I18n.t('stepSix.receiveMoney')}
      <Yellow>{I18n.t('stepSix.atOnce')}</Yellow>
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepSix.weProvide')}
    </Subtitle>
  </Fragment>
);

export default StepSixMobile;
