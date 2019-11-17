/**
 * * @project ui-kit
 * @author Kostiantyn Zinevych
 * @version 1.0
 * @since 2019-03-27
 */
// ----------StyledComponents----------
import styled from 'styled-components';
import { hexToRGBa } from 'Root/src/utils';
import colors from 'ColorsRoot';

const { primary } = colors;

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 100px;
  margin-bottom: 30px;
  font-family: "Avenir Next";
  z-index: 100;
`;

export const Step = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  &:not(:first-child) {
   // margin-left: ${props => props.stepPointSize - 2}px;
  }
`;

export const StepLine = styled.div`
  height: 5px;
  width: ${props => props.stepLength}px;
  background: linear-gradient(to right, ${primary._valid} 50%,
  ${props => (props.stepLineColor ? props.stepLineColor : primary._white)} 50%);
  background-size: 200% 100%;
  background-position: ${props => ((props.currentStep) ? 'left bottom' : 'right bottom')};
  transition: all .4s ease-out;
  
  border-top-left-radius: ${props => (props.isFirst ? 2 : 0)}px;
  border-bottom-left-radius: ${props => (props.isFirst ? 2 : 0)}px;
  border-top-right-radius: ${props => (props.isLast ? 2 : 0)}px;
  border-bottom-right-radius: ${props => (props.isLast ? 2 : 0)}px;
  margin-left: ${props => (props.isLast ? props.stepPointSize - 2 : 0)}px;
  
  @media screen and (max-width: 1200px) {
    width: calc(${props => props.stepLength}px - 30px);
  }
  
  @media screen and (max-width: 940px) {
    width: calc(${props => props.stepLength}px - 60px);
  }
  
  @media screen and (max-width: 680px) {
    width: calc(${props => props.stepLength}px - 80px);
  }
`;

export const StepCheckpointWrapper = styled.div`
  position: absolute;
  left: ${props => props.stepLength - 1}px;
  z-index: 1;
  
   @media screen and (max-width: 1200px) {
    left: ${props => props.stepLength - 31}px;
   }
   
   @media screen and (max-width: 940px) {
    left: ${props => props.stepLength - 61}px;
   }
   
   @media screen and (max-width: 680px) {
    left: ${props => props.stepLength - 81}px;
   }
`;

export const StepCheckpoint = styled.div`
  height: ${props => props.stepPointSize}px;
  width: ${props => props.stepPointSize}px;
  border-radius: 50%;
  background-color: ${props => (props.isChecked ? primary._valid : props.stepPointColor || primary._white)};
  border: 3px solid ${props => (props.isChecked || props.currentStep ? primary._valid : 'transparent')};
  cursor: ${props => (props.isControlled ? 'pointer' : 'default')};
  transition: all .3s ease-out;
  transform: ${props => ((props.isChecked) ? 'scale(1.3)' : 'none')};
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${props => (props.isChecked ? primary._label : hexToRGBa(primary._label, 0.5))};
  position: absolute;
  width: ${props => props.labelWidth}px;
  left: -${props => props.labelWidth / 2.4}px;
  top: 30px;
  text-align: center;
  font-weight: 600;
`;

export const LabelDesc = styled.span`
  font-size: 12px;
  display: block;
  font-weight: 400;
`;

export const StepperContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${primary._label};
  font-family: "Avenir Next";
  width: 100%;
  transition: all .4s ease-out;
`;

export const ContentWrapper = styled.div`
  display: flex;
  transition: all .4s ease-out;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  position: relative;
  height: 80px;
`;
