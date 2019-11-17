import React, { Fragment } from 'react';
import { Header } from 'ComponentsRoot';
import LogoImg from 'AssetsRoot/img/logo.svg';
import GooglePlayImg from 'AssetsRoot/img/playmarket.png';
import AppStoreImg from 'AssetsRoot/img/Appstore.png';
import SliderMobile from 'Root/src/components/SliderMobile';
import VideoBackground from 'AssetsRoot/video/cargoo_video.webm';
import ReactPlayer from 'react-player';
import {
  StepOneMobile,
  StepTwoMobile,
  StepThreeMobile,
  StepFourMobile,
  StepFiveMobile,
  StepSixMobile,
  StepSevenMobile,
  StepEightMobile,
  ContactMobile,
} from '../StepsMobile';

const videoStyles = {
  minWidth: '100vw',
  minHeight: '100vh',
  top: 0,
  left: 0,
  position: 'absolute',
  zIndex: -10
};

const Mobile = () => (
  <Fragment>
    <Header logoUrl={LogoImg} googleUrl={GooglePlayImg} appleUrl={AppStoreImg} />
    <SliderMobile items={[
      {
        id: 0,
        content: <StepOneMobile />
      },
      {
        id: 1,
        content: <StepTwoMobile />
      },
      {
        id: 2,
        content: <StepThreeMobile />
      },
      {
        id: 3,
        content: <StepFourMobile />
      },
      {
        id: 4,
        content: <StepFiveMobile />
      },
      {
        id: 5,
        content: <StepSixMobile />
      },
      {
        id: 6,
        content: <StepSevenMobile />
      },
      {
        id: 7,
        content: <StepEightMobile />
      },
      {
        id: 8,
        content: <ContactMobile />
      }
    ]}
    />
    <ReactPlayer url={VideoBackground} style={videoStyles} width="auto" height="100%" volume={0} />
  </Fragment>
);


export default Mobile;
