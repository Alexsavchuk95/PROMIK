import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import colors from 'ColorsRoot';
import uid from 'uuid/v1';
import { fieldPropTypes } from 'redux-form';
import { Label } from 'StyledComponentsRoot';
import Icons from 'AssetsRoot/icons';
import SVG from 'ComponentsRoot/SVG';
import {
  InputWrap,
  Input,
  ErrorMessage,
} from './StyledComponents';

const { primary, secondary } = colors;

class AuthInput extends PureComponent {
    static propTypes = {
      ...fieldPropTypes,
      input: PropTypes.object,
      meta: PropTypes.object,
      name: PropTypes.string,
      type: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      iconPath: PropTypes.string,
      iconViewBox: PropTypes.string,
      styleWrapper: PropTypes.object,
      styleInput: PropTypes.object,
      isValid: PropTypes.bool,
      placeholder: PropTypes.string,
      disabled: PropTypes.bool,
      borderLeft: PropTypes.bool,
      color: PropTypes.string,
      bgColor: PropTypes.string,
      colorError: PropTypes.string,
      bgColorError: PropTypes.string,
      borderColor: PropTypes.string,
      borderColorHoverActive: PropTypes.string,
      borderColorValid: PropTypes.string,
      borderColorError: PropTypes.string,
      iconColor: PropTypes.string,
      iconColorHoverActive: PropTypes.string,
      iconColorValid: PropTypes.string,
      iconColorError: PropTypes.string,
      colorLabel: PropTypes.string,
      colorLabelValid: PropTypes.string,
      colorLabelHoverActive: PropTypes.string,
      colorLabelError: PropTypes.string,
      colorDisabled: PropTypes.string,
    };

    static defaultProps = {
      input: {},
      meta: {},
      name: '',
      type: 'text',
      width: '566px',
      height: '50px',
      disabled: false,
      borderLeft: false,
      color: primary._white,
      bgColor: primary._grey,
      colorError: primary._white,
      bgColorError: primary._grey,
      borderColor: secondary._default,
      borderColorHoverActive: primary._active,
      borderColorValid: primary._valid,
      borderColorError: primary._error,
      iconColor: primary._white,
      iconColorHoverActive: primary._active,
      iconColorValid: primary._valid,
      iconColorError: primary._error,
      colorLabel: primary._white,
      colorLabelHoverActive: primary._active,
      colorLabelValid: primary._valid,
      colorLabelError: primary._error,
      colorDisabled: primary._disabled,
      iconPath: '',
      iconViewBox: '',
      isValid: undefined,
      styleWrapper: {},
      styleInput: {},
      placeholder: '',
    };

    constructor(props) {
      super(props);
      this.state = {
        hovered: false,
        focused: false,
        uid: uid(),
      };
    }

    getColorByCurrentState(disabledColor, errorColor, hoverColor, standardColor, colorValid) {
      const { disabled, meta } = this.props;
      const { hovered, focused } = this.state;

      if (disabled) {
        return disabledColor;
      }
      if (meta.error !== undefined && meta.invalid) {
        return errorColor;
      }
      if (meta.valid && !meta.pristine) {
        return colorValid;
      }
      if (hovered || focused) {
        return hoverColor;
      }
      return standardColor;
    }

    getLabelColor() {
      const { colorLabel, colorLabelError, colorLabelHoverActive } = this.props;
      return this.getColorByCurrentState(
        colorLabel,
        colorLabelError,
        colorLabelHoverActive,
        colorLabel
      );
    }

    getIconColor() {
      const { colorDisabled, iconColorError, iconColorHoverActive, iconColorValid, iconColor } = this.props;
      return this.getColorByCurrentState(
        colorDisabled,
        iconColorError,
        iconColorHoverActive,
        iconColor,
        iconColorValid,
      );
    }

    getBorderColor() {
      const { colorDisabled, borderColorError, borderColorHoverActive, borderColor, borderColorValid } = this.props;
      return this.getColorByCurrentState(
        colorDisabled,
        borderColorError,
        borderColorHoverActive,
        borderColor,
        borderColorValid,
      );
    }

    render() {
      const { input, meta, name, styleWrapper, label, disabled, width, height, styleInput, iconPath, iconViewBox,
        type, placeholder, color, bgColor, iconColorError, colorError, bgColorError, borderLeft
      } = this.props;
      const { state } = this;
      const nameResult = (input && input.name) ? input.name : name;

      return (
        <div style={styleWrapper}>
          <If condition={label}>
            <Label
              htmlFor={`${nameResult}-${state.uid}`}
              color={this.getLabelColor()}
              cursor={(disabled) ? 'not-allowed' : 'pointer'}
              marginLeft="21px"
            >
              {label}
            </Label>
          </If>
          <InputWrap
            width={width}
            height={height}
            style={styleInput}
          >
            <SVG
              fill={this.getIconColor()}
              width="18px"
              height="18px"
              style={{
                position: 'absolute',
                top: '18px',
                left: '54px',
              }}
              path={iconPath}
              viewBox={iconViewBox}
            />
            <Input
              {...input}
              name={nameResult}
              id={`${nameResult}-${state.uid}`}
              type={type}
              placeholder={placeholder}
              disabled={!!disabled}
              color={color}
              bgColor={bgColor}
              borderLeft={borderLeft}
              borderColor={this.getBorderColor()}
              onMouseEnter={() => { this.setState({ hovered: true }); }}
              onMouseLeave={() => { this.setState({ hovered: false }); }}
              onFocus={() => { this.setState({ focused: true }); }}
              onBlur={() => { this.setState({ focused: false }); }}
            />

            <If condition={meta.error !== undefined && meta.invalid}>
              <SVG
                fill={iconColorError}
                width="10px"
                height="10px"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '50px',
                  cursor: 'pointer',
                }}
                path={Icons.cancel}
                viewBox="0 6 30 30"
              />
            </If>
          </InputWrap>
          <If condition={meta.error}>
            <ErrorMessage color={colorError} bgColor={bgColorError}>
              {meta.error}
            </ErrorMessage>
          </If>
        </div>
      );
    }
}

export default AuthInput;
