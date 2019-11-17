import React, { memo } from 'react';
import PropTypes from 'prop-types';
import colors from 'ColorsRoot';
import { Button } from './StyledComponents';

const { primary } = colors;

const AuthButton = memo((props) => {
  const {
    styleWrapper,
    type,
    btnColor,
    btnColorHover,
    btnBgColor,
    btnBgHover,
    borderColor,
    bgColorPressed,
    width,
    height,
    onClick,
    disabled,
    text
  } = props;

  return (
    <div style={styleWrapper}>
      <Button
        type={type}
        color={btnColor}
        colorHover={btnColorHover}
        bgColor={btnBgColor}
        bgColorHover={btnBgHover}
        borderColor={borderColor}
        bgColorPressed={bgColorPressed}
        width={width}
        height={height}
        onClick={onClick}
        disabled={!!disabled}
      >
        {text}
      </Button>
    </div>
  );
});

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  styleWrapper: PropTypes.object,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  btnColor: PropTypes.string,
  btnColorHover: PropTypes.string,
  btnBgColor: PropTypes.string,
  btnBgHover: PropTypes.string,
  borderColor: PropTypes.string,
  bgColorPressed: PropTypes.string,
  onClick: PropTypes.func,
};

AuthButton.defaultProps = {
  styleWrapper: {},
  disabled: false,
  width: '270px',
  height: '50px',
  btnColor: primary._auth_btn_color,
  btnColorHover: primary._auth_btn_color_hover,
  btnBgColor: primary._auth_btn_bg_color,
  btnBgHover: primary._auth_btn_bg_color_hover,
  borderColor: primary._auth_btn_border_color,
  bgColorPressed: primary._auth_btn_bg_color_pressed,
  onClick: () => {},
};

export default AuthButton;
