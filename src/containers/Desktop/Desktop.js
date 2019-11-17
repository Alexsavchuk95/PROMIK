import React, { Fragment } from 'react';
import { Header, Stepper as StepperComponent } from 'ComponentsRoot';
import LogoImg from 'AssetsRoot/img/logo.svg';
import AppStoreImg from 'AssetsRoot/img/appstore.svg';
import GooglePlayImg from 'AssetsRoot/img/google.svg';
import colors from 'ColorsRoot';
import VideoBackground from 'AssetsRoot/video/cargoo_video.webm';
import ReactPlayer from 'react-player';
import Contact from '../Contact';
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  StepSeven,
  StepEight,
} from '../Steps';


const videoStyles = {
  minWidth: '100vw',
  minHeight: '100vh',
  top: 0,
  left: 0,
  position: 'absolute',
  zIndex: -10
};

const { primary } = colors;

const Desktop = () => (
  <Fragment>
    <Header logoUrl={LogoImg} googleUrl={GooglePlayImg} appleUrl={AppStoreImg} />
    <StepperComponent
      currentStep={0}
      stepLength={150}
      isControlled
      withInterval
      stepLineColor={primary._stepper_line_color}
      stepPointColor={primary._stepper_point_color}
      styleWrapper={{ position: 'absolute', bottom: 0, overflow: 'auto', margin: 0 }}
      steps={[
        {
          id: 1,
          content: <StepOne />
        },
        {
          id: 2,
          content: <StepTwo />
        },
        {
          id: 3,
          content: <StepThree />
        },
        {
          id: 4,
          content: <StepFour />
        },
        {
          id: 5,
          content: <StepFive />
        },
        {
          id: 6,
          content: <StepSix />
        },
        {
          id: 7,
          content: <StepSeven />
        },
        {
          id: 8,
          content: <StepEight />
        },
        {
          id: 9,
          content: <Contact />
        },
      ]}
    />
    <ReactPlayer url={VideoBackground} style={videoStyles} width="auto" height="100%" playing loop volume={0} />
  </Fragment>
);

export default Desktop;
