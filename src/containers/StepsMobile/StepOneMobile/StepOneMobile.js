import React, { Fragment } from 'react';
import titleImg from 'AssetsRoot/img/text promo.png';
import car from 'AssetsRoot/img/loader_car.png';
import { CarGooWrapper } from '../StyledComponents';

const style = {
  marginTop: '121px'
};

const StepOneMobile = () => (
  <Fragment>
    <CarGooWrapper style={style}>
      <img src={titleImg} alt="CarGoo" />
    </CarGooWrapper>
    <img src={car} alt="CarGoo" />
  </Fragment>
);

export default StepOneMobile;
