/**
 * @project ui-kit
 * @author Kostiantyn Zinevych
 * @version 1.0
 * @since 2019-03-01
 */
// ----------index----------

import React, { Fragment, useState, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import ClassicButton from 'Root/src/components/ClassicButton';
import { I18n } from 'react-redux-i18n';
import colors from 'ColorsRoot';
import {
  StepperWrapper,
  Step,
  StepLine,
  StepCheckpointWrapper,
  StepCheckpoint,
  Label,
  LabelDesc,
  StepperContent,
  ContentWrapper,
  ButtonWrapper,
} from './StyledComponents';

const { primary } = colors;

const Stepper = memo((props) => {
  const { styleWrapper, steps, stepPointSize, stepPointColor, stepLength, stepLineColor,
    isControlled, withInterval, stepsInterval, showButtons, currentStep,
  } = props;

  const [currentStepState, setCurrentStepState] = useState(currentStep);
  const [timerId, setTimerId] = useState(undefined);

  const changeStepsWithInterval = (slides, slideIndex) => {
    let index = slideIndex;
    const timer = setInterval(() => {
      index += 1;
      setCurrentStepState(index);
      if (index === slides.length - 1) {
        clearInterval(timer);
      }
    }, stepsInterval);
    setTimerId(timer);
  };

  useEffect(() => {
    withInterval && changeStepsWithInterval(steps, 0);
  }, []);

  const handleOnClick = useCallback((step) => {
    if (isControlled) {
      withInterval && clearInterval(timerId);
      setCurrentStepState(step);
    }
  }, [isControlled, withInterval, currentStepState, setCurrentStepState]);

  return (
    <Fragment>
      <StepperWrapper style={styleWrapper}>
        {
          (steps && steps.map((step, index) => (
            <Step
              key={step.label || index}
              stepPointSize={stepPointSize}
            >
              <StepLine
                stepLength={(index === 0) ? stepLength - 80 : stepLength}
                currentStep={currentStepState >= index}
                stepLineColor={stepLineColor}
                isFirst={index === 0}
              />
              <StepCheckpointWrapper
                stepLength={(index === 0) ? stepLength - 80 : stepLength}
              >
                <StepCheckpoint
                  stepLength={(index === 0) ? stepLength - 80 : stepLength}
                  stepPointSize={stepPointSize}
                  stepPointColor={stepPointColor}
                  currentStep={currentStepState === index}
                  isChecked={(currentStepState > index) || (currentStepState > steps.length - 1)}
                  isControlled={isControlled}
                  onClick={() => handleOnClick(index)}
                />
                <Label
                  labelWidth={135}
                  isChecked={(currentStepState >= index) || (currentStepState > steps.length - 1)}
                >
                  {step.label}
                  <If condition={step.labelInfo}>
                    <LabelDesc>{step.labelInfo}</LabelDesc>
                  </If>
                </Label>
              </StepCheckpointWrapper>
              <If condition={index === steps.length - 1}>
                <StepLine
                  stepLength={stepLength - 80}
                  currentStep={currentStepState > steps.length - 1}
                  stepLineColor={stepLineColor}
                  isLast={index === steps.length - 1}
                  stepPointSize={stepPointSize}
                />
              </If>
            </Step>
          )))
        }
      </StepperWrapper>
      <StepperContent>
        {
          (steps.map((step, index) => {
            if (currentStepState === index) {
              return (
                <div key={step.label || index}>
                  <ContentWrapper>
                    {step.content}
                  </ContentWrapper>
                  <If condition={showButtons}>
                    <ButtonWrapper>
                      <If condition={currentStepState !== 0}>
                        <ClassicButton
                          styleWrapper={{ position: 'absolute', left: 60 }}
                          width="210px"
                          onClick={() => {
                            setCurrentStepState(currentStepState - 1);
                          }}
                        >
                          {I18n.t('buttons.previousStep')}
                        </ClassicButton>
                      </If>
                      <ClassicButton
                        color={primary._btn_color}
                        bgColor={primary._btn_bg_color}
                        colorHover={primary._btn_color_hover}
                        bgColorHover={primary._btn_bg_color_hover}
                        borderColor={primary._btn_border_color}
                        borderColorHover={primary._btn_border_color_hover}
                        bgColorPressed={primary._btn_bg_color_pressed}
                        borderRadius="2px"
                        width="210px"
                        styleWrapper={{ position: 'absolute', right: 60 }}
                        onClick={() => {
                          setCurrentStepState(currentStepState + 1);
                        }}
                      >
                        {I18n.t('buttons.nextStep')}
                      </ClassicButton>
                    </ButtonWrapper>
                  </If>
                </div>
              );
            }
            return null;
          }))
        }
      </StepperContent>
    </Fragment>
  );
});

Stepper.propTypes = {
  styleWrapper: PropTypes.object,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      labelInfo: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.array,
      ]).isRequired,
    })
  ),
  currentStep: PropTypes.number.isRequired,
  stepLength: PropTypes.number,
  stepLineColor: PropTypes.string,
  stepPointSize: PropTypes.number,
  stepPointColor: PropTypes.string,
  isControlled: PropTypes.bool.isRequired,
  withInterval: PropTypes.bool,
  stepsInterval: PropTypes.number,
  showButtons: PropTypes.bool,
};

Stepper.defaultProps = {
  styleWrapper: {},
  steps: [],
  stepLength: 140,
  stepLineColor: primary._white,
  stepPointSize: 20,
  stepPointColor: primary._white,
  withInterval: false,
  stepsInterval: 3000,
  showButtons: false,
};

export default Stepper;
