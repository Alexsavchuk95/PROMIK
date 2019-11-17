import React, { Fragment } from 'react';
import { I18n } from 'react-redux-i18n';
import car from 'AssetsRoot/img/loader_car.png';
import { Title, Subtitle, Yellow } from 'StyledComponentsRoot';
import { Img } from '../StyledComponents';

const text = {
  maxWidth: '259px'
};

const StepFiveMobile = () => (
  <Fragment>
    <Title>
      {I18n.t('stepFive.earnFrom')}
      <Yellow>{I18n.t('stepFive.thousands')}</Yellow>
      {I18n.t('stepFive.perMonth')}
      {/* ???Up */}
    </Title>
    <Img src={car} alt="Car" />
    <Subtitle style={text}>
      {I18n.t('stepFive.weProvide')}
    </Subtitle>
  </Fragment>
);

export default StepFiveMobile;
