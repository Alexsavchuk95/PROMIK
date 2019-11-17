import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ClassicButton from 'ComponentsRoot/ClassicButton';
import {
  Container,
  Content,
  BtnContainer,
  Wrapper,
  WrapperMobile
} from './StyledComponents';

export default class SliderMobile extends Component {
    static propTypes = {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
            PropTypes.array,
          ]).isRequired,
        }),
      ).isRequired,
      step: PropTypes.number,
    };

    static defaultProps = {
      step: 1,
    };

    state = {
      index: 0,
    }

    handleClick = () => {
      const props = this.props;
      console.log('click state: ', this.state);
      console.log('click props: ', props);
      this.setState(state => ({
        index: state.index + props.step,
      }));
    };

    render() {
      const { items } = this.props;
      const { index } = this.state;
      const disable = index === items.length - 1;
      console.log('lenght', items.length);
      console.log('fdfd', items[index]);
      console.log('items', items);
      return (
        <Fragment>
          <WrapperMobile>
            {items.map((item, i) => (
              <Container key={item.id}>
                <Content>
                  {console.log('render: ', index)}
                  {i === index && item.content}
                </Content>
              </Container>
            ))}
          </WrapperMobile>
          <BtnContainer>
            <ClassicButton
              onClick={this.handleClick}
              disabled={disable}
              borderRadius="50%"
              width="28px"
              height="28px"
              bgColorHover="none"
              colorHover="none"
            />
          </BtnContainer>
        </Fragment>
      );
    }
}
