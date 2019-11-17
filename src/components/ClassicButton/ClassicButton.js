import React, { memo } from 'react';
import PropTypes from 'prop-types';
import colors from 'ColorsRoot';
import { Button } from './StyledComponents';

const { primary, secondary } = colors;

const ClassicButton = memo((props) => {
  const {
    children, styleWrapper, type, width, height, color, colorHover, bgColor, bgColorHover, onClick,
    colorDisabled, bgColorDisabled, disabled, bgColorPressed, borderRadius, borderColor,
    borderColorHover
  } = props;

  return (
    <Button
      style={styleWrapper}
      type={type}
      width={width}
      height={height}
      color={color}
      colorHover={colorHover}
      bgColor={bgColor}
      bgColorHover={bgColorHover}
      colorDisabled={colorDisabled}
      bgColorDisabled={bgColorDisabled}
      borderColor={borderColor}
      borderColorHover={borderColorHover}
      bgColorPressed={bgColorPressed}
      borderRadius={borderRadius}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
});

ClassicButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  styleWrapper: PropTypes.object,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  bgColor: PropTypes.string,
  bgColorHover: PropTypes.string,
  bgColorPressed: PropTypes.string,
  borderColor: PropTypes.string,
  borderColorHover: PropTypes.string,
  disabled: PropTypes.bool,
  colorDisabled: PropTypes.string,
  bgColorDisabled: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
};

ClassicButton.defaultProps = {
  styleWrapper: {},
  type: 'button',
  width: '160px',
  height: '40px',
  color: primary._btn_outlined_color,
  colorHover: primary._btn_outlined_active,
  bgColor: primary._btn_outlined_bg_color,
  bgColorHover: primary._btn_outlined_bg_color_active,
  bgColorPressed: primary._btn_outlined_pressed,
  borderColor: secondary._default,
  borderColorHover: primary._default,
  disabled: false,
  colorDisabled: primary._btn_outlined_color_disabled,
  bgColorDisabled: primary._btn_outlined_bg_color_disabled,
  borderRadius: '2px',
  onClick: () => {},
};

export default ClassicButton;
