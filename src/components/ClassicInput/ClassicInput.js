import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';
import uid from 'uuid/v1';
import { Label } from 'StyledComponentsRoot';
import Icons from 'AssetsRoot/icons';
import SVG from 'ComponentsRoot/SVG';
import colors from 'ColorsRoot';
import {
  Wrapper,
  InputWrap,
  Input,
  ErrorMessage,
  IconCustom,
} from './StyledComponents';

const { primary, secondary } = colors;

class ClassicInput extends PureComponent {
    static propTypes = {
      ...fieldPropTypes,
      input: PropTypes.object,
      meta: PropTypes.object,
      type: PropTypes.string,
      name: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
      label: PropTypes.string,
      labelColor: PropTypes.string,
      styleWrapper: PropTypes.object,
      styleInput: PropTypes.object,
      isValid: PropTypes.bool,
      errorMessage: PropTypes.string,
      disabled: PropTypes.bool,
      placeholder: PropTypes.string,
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
      iconPath: PropTypes.string,
      iconPolygon: PropTypes.string,
      iconViewBox: PropTypes.string,
      disabledBg: PropTypes.string,
      couldShowPassword: PropTypes.bool,
    };

    static defaultProps = {
      input: {},
      meta: {},
      name: '',
      type: 'text',
      width: '325px',
      height: '36px',
      label: '',
      labelColor: primary._classic_input_color,
      styleWrapper: {},
      styleInput: {},
      errorMessage: '',
      isValid: undefined,
      disabled: false,
      placeholder: '',
      color: primary._classic_input_color,
      bgColor: secondary._classic_input_bg_color,
      colorError: primary._classic_input_color_error,
      bgColorError: primary._classic_input_bg_color_error,
      borderColor: primary._classic_input_border_color,
      borderColorHoverActive: primary._classic_input_border_color_hover_active,
      borderColorValid: primary._classic_input_border_color_valid,
      borderColorError: primary._classic_input_border_color_error,
      iconColor: primary._classic_input_icon_color,
      iconColorHoverActive: primary._classic_input_icon_color_hover_active,
      iconColorValid: primary._classic_input_icon_color_valid,
      iconColorError: primary._classic_input_icon_color_error,
      colorLabel: primary._classic_input_label_color,
      colorLabelHoverActive: primary._classic_input_label_color_active,
      colorLabelValid: primary._classic_input_label_color_valid,
      colorLabelError: primary._classic_input_label_color_error,
      iconPath: '',
      iconPolygon: '',
      iconViewBox: '',
      colorDisabled: primary._classic_input_color_disabled,
      disabledBg: primary._classic_input_bg_color_disabled,
      couldShowPassword: false,
    };

    constructor(props) {
      super(props);
      this.state = {
        hovered: false,
        focused: false,
        type: props.type,
      };
    }

    getLabelColor() {
      const { disabled, colorLabel, isValid, colorLabelError, colorLabelValid, colorLabelHoverActive } = this.props;
      const { hovered, focused } = this.state;
      if (disabled) return colorLabel;

      if (isValid === false) return colorLabelError;

      if (isValid === true) return colorLabelValid;

      return (!hovered && !focused)
        ? colorLabel
        : colorLabelHoverActive;
    }

    getColor() {
      const { disabled, disabledBg, isValid, borderColorError, borderColorValid, borderColor, borderColorHoverActive
      } = this.props;
      const { hovered, focused } = this.state;
      if (disabled) return disabledBg;

      if (isValid === false) return borderColorError;

      if (isValid === true) return borderColorValid;

      return (!hovered && !focused)
        ? borderColor
        : borderColorHoverActive;
    }

    handleToggleType = () => {
      const { type } = this.state;
      if (type === 'password') this.setState({ type: 'text' });
      if (type === 'text') this.setState({ type: 'password' });
    };

    render() {
      const { input, meta, name, styleWrapper, label, disabled, width, height, styleInput, placeholder, color,
        bgColor, errorMessage, iconPath, iconViewBox, isValid, iconColor, iconColorValid, iconColorError,
        colorError, bgColorError, couldShowPassword, iconPolygon
      } = this.props;
      const { type } = this.state;
      const nameResult = (input && input.name) ? input.name : name;

      return (
        <Wrapper style={styleWrapper}>
          <If condition={label}>
            <Label
              htmlFor={`${name}-${uid()}`}
              color={this.getLabelColor()}
              cursor={(disabled) ? 'not-allowed' : 'pointer'}
              marginLeft="21px"
              display="inline-block"
              fontSize="12px"
              fontWeight="600"
              marginBottom="5px"
            >
              {label}
            </Label>
          </If>
          <InputWrap
            width={width}
            height={height}
            style={styleInput}
          >
            <Input
              {...input}
              id={`${nameResult}-${uid()}`}
              name={nameResult}
              type={type}
              placeholder={placeholder}
              disabled={!!disabled}
              color={color}
              bgColor={bgColor}
              disabledBg={this.getColor()}
              borderColor={this.getColor()}
              errorMessage={errorMessage}
              onMouseEnter={() => { this.setState({ hovered: true }); }}
              onMouseLeave={() => { this.setState({ hovered: false }); }}
              onFocus={() => { this.setState({ focused: true }); }}
              onBlur={() => { this.setState({ focused: false }); }}
            />

            <If condition={couldShowPassword}>
              <IconCustom
                width={14}
                height={14}
                fill={primary._icon_default}
                fillHover={primary._active}
                onClick={this.handleToggleType}
              >
                <SVG
                  fill={type === 'text' ? primary._active : primary._label}
                  width="18px"
                  height="18px"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '20px',
                    cursor: 'pointer',
                  }}
                  path={Icons.eye}
                  viewBox="0 -5 45 45"
                />
              </IconCustom>
            </If>

            <If condition={iconPath && (isValid === undefined)}>
              <SVG
                fill={iconColor}
                width="13px"
                height="13px"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '20px'
                }}
                path={iconPath}
                polygon={iconPolygon}
                viewBox={iconViewBox}
              />
            </If>

            <If condition={iconPolygon && (isValid === undefined)}>
              <SVG
                fill={iconColor}
                width="13px"
                height="13px"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '20px'
                }}
                polygon={iconPolygon}
                viewBox={iconViewBox}
              />
            </If>

            <If condition={isValid === true}>
              <SVG
                fill={iconColorValid}
                width="15px"
                height="15px"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '20px'
                }}
                path={Icons.done}
                viewBox="0 6 45 45"
              />
            </If>
            <If condition={isValid === false}>
              <SVG
                fill={iconColorError}
                width="10px"
                height="10px"
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  cursor: 'pointer',
                }}
                path={Icons.cancel}
                viewBox="0 6 45 45"
              />
            </If>
          </InputWrap>
          <If condition={meta.error}>
            <ErrorMessage color={colorError} bgColor={bgColorError}>
              {meta.error}
            </ErrorMessage>
          </If>
        </Wrapper>
      );
    }
}

export default ClassicInput;
