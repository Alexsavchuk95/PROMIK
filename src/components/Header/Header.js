import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  LogoWrapper,
  AppsWrapper,
  Logo,
  AppImage,
} from './StyledComponents';

const Header = ({ logoUrl, googleUrl, appleUrl }) => (
  <Wrapper>
    <LogoWrapper>
      <Logo src={logoUrl} alt="logo" />
    </LogoWrapper>
    <AppsWrapper>
      <AppImage src={googleUrl} alt="google play" />
      <AppImage src={appleUrl} alt="app store" />
    </AppsWrapper>
  </Wrapper>
);

Header.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  googleUrl: PropTypes.string.isRequired,
  appleUrl: PropTypes.string.isRequired,
};

export default Header;
