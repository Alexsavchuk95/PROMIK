import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, clearSubmitErrors, propTypes as formPropTypes } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { AuthInput, ClassicButton } from 'ComponentsRoot';
import Icons from 'AssetsRoot/icons';
import colors from 'ColorsRoot';
import {
  Wrapper,
  Title,
  Subtitle,
  Yellow,
  ErrorMessage,
} from 'StyledComponentsRoot';
import {
  ContactInfo,
  Form,
} from '../../Contact/StyledComponents';

const { primary } = colors;

class StepNine extends Component {
  static propTypes = {
    ...formPropTypes,
  };

  render() {
    const {
      handleSubmit,
      error,
      pristine,
      submitting,
    } = this.props;

    return (
      <Wrapper contact>
        <ContactInfo>
          <Title margin="0">
            {I18n.t('contact.leaveYour')}
            <Yellow>{I18n.t('contact.email')}</Yellow>
          </Title>
          <Subtitle>{I18n.t('contact.info')}</Subtitle>
          <Form
            onSubmit={handleSubmit}
          >
            <Field
              component={AuthInput}
              name="email"
              type="email"
              placeholder={I18n.t('contact.email')}
              width="90%"
              iconPath={Icons.operator}
              iconViewBox="0 0 45 45"
              borderLeft
              bgColor={primary._input_email_bg}
              styleInput={{ margin: '0 auto' }}
              styleWrapper={{ margin: '20px auto' }}
            />
            <ClassicButton
              type="submit"
              color={primary._auth_btn_color}
              bgColor={primary._auth_btn_bg_color}
              colorHover={primary._auth_btn_color_hover}
              bgColorHover={primary._auth_btn_bg_color_hover}
              borderColor={primary._auth_btn_border_color}
              bgColorPressed={primary._auth_btn_bg_color_pressed}
              borderRadius="4px"
              width="373px"
              height="50px"
              disabled={pristine || submitting}
              styleWrapper={{ margin: '0 auto', maxWidth: '80%', fontSize: '16px' }}
            >
              {submitting ? I18n.t('buttons.loading') : I18n.t('buttons.contactMe')}
            </ClassicButton>
            <If condition={error}>
              <ErrorMessage color={primary._white} bgColor={primary._grey}>
                {error}
              </ErrorMessage>
            </If>
          </Form>
        </ContactInfo>
      </Wrapper>
    );
  }
}

const ContactForm = reduxForm({
  form: 'contact-form',
  onChange: (values, dispatch, props) => {
    if (props.invalid) dispatch(clearSubmitErrors('contact-form'));
  }
})(StepNine);

export default connect()(ContactForm);
