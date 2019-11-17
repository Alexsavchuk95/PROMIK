import React, { Component } from 'react';
import { I18n } from 'react-redux-i18n';
import { Link } from 'react-router';
import Icons from 'AssetsRoot/icons';
import colors from 'ColorsRoot';
import { SVG } from 'ComponentsRoot';

import {
  NotFoundWrap,
  NotFoundInner,
  NotFoundInfo,
  HomeLink,
  Icon,
  NotFoundCode,
} from './StyledComponents';

const { primary } = colors;

class NotFound extends Component {
  render() {
    return (
      <NotFoundWrap>
        <NotFoundInner>
          <Icon>
            <SVG
              fill={primary._404_icon_color}
              width="50px"
              height="50px"
              path={Icons.error}
              viewBox="-2 0 50 50"
            />
          </Icon>
          <NotFoundCode>
            {I18n.t('404.title')}
          </NotFoundCode>
          <NotFoundInfo>
            {I18n.t('404.notFoundText')}
          </NotFoundInfo>
          <HomeLink>
            <Link to="/">
              {I18n.t('404.backToHomePage')}
            </Link>
          </HomeLink>
        </NotFoundInner>
      </NotFoundWrap>
    );
  }
}

export default NotFound;
